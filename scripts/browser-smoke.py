#!/usr/bin/env python3
"""Small Chrome DevTools smoke test for the dependency-free PWA."""

import json
import subprocess
import tempfile
import time
import urllib.request

import websocket


BASE_URL = "http://127.0.0.1:4174/"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT = 9334


def wait_for_page():
    deadline = time.time() + 12
    while time.time() < deadline:
        try:
            pages = json.load(urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json", timeout=1))
            return next(page for page in pages if page.get("type") == "page")
        except Exception:
            time.sleep(0.2)
    raise RuntimeError("Chrome DevTools page did not become ready")


class DevTools:
    def __init__(self, endpoint):
        self.ws = websocket.create_connection(endpoint, suppress_origin=True)
        self.sequence = 0

    def call(self, method, params=None):
        self.sequence += 1
        ident = self.sequence
        self.ws.send(json.dumps({"id": ident, "method": method, "params": params or {}}))
        while True:
            message = json.loads(self.ws.recv())
            if message.get("id") == ident:
                if "error" in message:
                    raise RuntimeError(message["error"])
                return message.get("result", {})

    def evaluate(self, expression):
        result = self.call("Runtime.evaluate", {
            "expression": expression,
            "awaitPromise": True,
            "returnByValue": True,
        })
        payload = result.get("result", {})
        if payload.get("subtype") == "error":
            raise AssertionError(payload.get("description", "JavaScript evaluation failed"))
        return payload.get("value")

    def navigate(self, url):
        self.call("Page.navigate", {"url": url})
        deadline = time.time() + 12
        while time.time() < deadline:
            ready = self.evaluate("document.readyState")
            if ready == "complete" and self.evaluate("Boolean(document.querySelector('h1'))"):
                return
            time.sleep(0.1)
        raise AssertionError(f"Page did not render: {url}")


def require(condition, message):
    if not condition:
        raise AssertionError(message)


def main():
    profile = tempfile.mkdtemp(prefix="europe-pwa-smoke-")
    browser = subprocess.Popen([
        CHROME,
        "--headless=new",
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
        f"--remote-debugging-port={PORT}",
        f"--user-data-dir={profile}",
        "--window-size=500,900",
        f"{BASE_URL}?mockNow=2026-10-15T12:00:00%2B08:00",
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    checks = []
    try:
        page = wait_for_page()
        dev = DevTools(page["webSocketDebuggerUrl"])
        dev.call("Emulation.setDeviceMetricsOverride", {
            "width": 390,
            "height": 844,
            "deviceScaleFactor": 1,
            "mobile": True,
        })

        require(dev.evaluate("document.querySelector('.hero h1').innerText") == "出發前 1 日", "before-trip mock time failed")
        require(dev.evaluate("document.documentElement.scrollWidth") <= 390, "mobile horizontal overflow on home")
        checks.append("before-trip mock time")

        dev.evaluate("document.querySelector('[data-tab=days]').click()")
        require(dev.evaluate("document.querySelectorAll('.day-card').length") == 16, "itinerary does not show all 16 days")
        require(dev.evaluate("document.documentElement.scrollWidth") <= 390, "mobile horizontal overflow on days")
        checks.append("16-day itinerary")

        dev.evaluate("document.querySelector('[data-day=d02]').click()")
        require(dev.evaluate("(() => { const c=[...document.querySelectorAll('.activity')].find(x=>x.querySelector('h3').innerText.includes('Canal Cruise')); return c && ![...c.querySelectorAll('a')].some(a=>a.href.includes('google.com/maps')); })()"), "unknown canal pier exposed a fake Maps link")
        checks.append("unknown-location Maps guard")

        dev.evaluate("document.querySelector('[data-tab=days]').click()")
        dev.evaluate("document.querySelector('[data-day=d03]').click()")
        require("現代建築" in dev.evaluate("document.querySelector('h1').innerText"), "Day 3 detail did not open")
        require(dev.evaluate("document.querySelectorAll('.activity').length") == 6, "Day 3 activity count changed")
        checks.append("day detail")

        dev.evaluate("document.querySelector('[data-tab=route]').click()")
        require(dev.evaluate("document.querySelectorAll('.route-stop').length") == 10, "route stop count changed")
        require(dev.evaluate("document.querySelectorAll('.place-row').length") >= 45, "address index is unexpectedly incomplete")
        checks.append("route and address index")

        dev.evaluate("document.querySelector('[data-tab=stays]').click()")
        require(dev.evaluate("document.querySelectorAll('.hotel-card').length") == 11, "hotel inventory changed")
        require(dev.evaluate("(() => { const h=[...document.querySelectorAll('.hotel-card')].find(x=>x.querySelector('h2').innerText.includes('Dijon hotel')); return h && ![...h.querySelectorAll('a')].some(a=>a.href.includes('google.com/maps')); })()"), "unknown Dijon hotel exposed a fake Maps link")
        checks.append("hotel alternatives")

        dev.evaluate("document.querySelector('[data-tab=verify]').click()")
        require(dev.evaluate("document.querySelectorAll('.issue-list .issue-card').length") >= 11, "verification issues missing")
        require(dev.evaluate("document.querySelectorAll('.reference-row').length") >= 50, "official source index is unexpectedly incomplete")
        require(dev.evaluate("[...document.querySelectorAll('a[href]')].every(a => !/^javascript:/i.test(a.href))"), "unsafe JavaScript link found")
        checks.append("verification centre")

        dev.navigate(f"{BASE_URL}?mockNow=2026-10-17T01:00:00%2B02:00")
        require("EK381" not in dev.evaluate("document.querySelector('.now-grid').innerText"), "unverified flight triggered a live reminder")
        checks.append("unverified-flight reminder guard")

        dev.navigate(f"{BASE_URL}?mockNow=2026-10-19T16:30:00%2B02:00")
        require("安全 cutoff" in dev.evaluate("document.querySelector('.now-grid').innerText"), "Oesterfestival cutoff mock failed")
        checks.append("Oesterfestival cutoff mock")

        dev.navigate(f"{BASE_URL}?mockNow=2026-10-25T10:00:00%2B01:00")
        require(dev.evaluate("document.querySelector('.hero h1').innerText") == "旅程第 10 日", "DST-change mock day failed")
        checks.append("DST-change mock time")

        dev.navigate(f"{BASE_URL}?mockNow=2026-10-28T08:00:00%2B01:00")
        require(dev.evaluate("document.querySelector('.hero h1').innerText") == "旅程第 13 日", "Switzerland morning mock day failed")
        checks.append("Switzerland morning mock time")

        dev.navigate(f"{BASE_URL}?mockNow=2026-10-27T10:22:00%2B01:00")
        require("Montbovon" in dev.evaluate("document.querySelector('.now-grid').innerText"), "GoldenPass 10:22 reminder failed")
        require("唔好落車" in dev.evaluate("document.querySelector('.now-cell.is-alert').innerText"), "GoldenPass warning missing")
        checks.append("GoldenPass corrected-time mock")

        dev.navigate(BASE_URL)
        require(dev.evaluate("navigator.serviceWorker.ready.then(() => true)") is True, "service worker did not become ready")
        dev.navigate(BASE_URL)
        require(dev.evaluate("Boolean(navigator.serviceWorker.controller)"), "service worker did not control the page")
        dev.call("Network.enable")
        dev.call("Network.emulateNetworkConditions", {
            "offline": True,
            "latency": 0,
            "downloadThroughput": 0,
            "uploadThroughput": 0,
            "connectionType": "none",
        })
        require(dev.evaluate("fetch('data.js?v=1.0.2').then(r => r.ok).catch(() => false)") is True, "offline app-shell fetch failed")
        dev.call("Network.emulateNetworkConditions", {
            "offline": False,
            "latency": 0,
            "downloadThroughput": -1,
            "uploadThroughput": -1,
            "connectionType": "wifi",
        })
        checks.append("offline app shell")

        dev.navigate(f"{BASE_URL}?print=1")
        require(dev.evaluate("document.querySelectorAll('.print-day').length") == 16, "print mode does not contain all days")
        require(dev.evaluate("document.querySelectorAll('.print-day .activity').length") >= 45, "print mode activity inventory incomplete")
        checks.append("print mode")

        dev.call("Emulation.setDeviceMetricsOverride", {
            "width": 1440,
            "height": 1000,
            "deviceScaleFactor": 1,
            "mobile": False,
        })
        dev.navigate(f"{BASE_URL}?mockNow=2026-10-18T15:00:00%2B02:00")
        require(dev.evaluate("document.documentElement.scrollWidth") <= 1440, "desktop horizontal overflow")
        checks.append("desktop layout")

        print("PASS\t" + " | ".join(checks))
    finally:
        browser.terminate()
        try:
            browser.wait(timeout=5)
        except subprocess.TimeoutExpired:
            browser.kill()


if __name__ == "__main__":
    main()
