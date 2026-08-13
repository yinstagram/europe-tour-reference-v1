#!/usr/bin/env python3
"""Capture deterministic mobile and desktop QA screenshots through Chrome DevTools."""

import base64
import json
import subprocess
import tempfile
import time
import urllib.request
from pathlib import Path

import websocket


BASE_URL = "http://127.0.0.1:4174/"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT = 9335
OUTPUT = Path(__file__).resolve().parent.parent / "tmp" / "final-screens"


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
        payload = self.call("Runtime.evaluate", {
            "expression": expression,
            "awaitPromise": True,
            "returnByValue": True,
        }).get("result", {})
        return payload.get("value")

    def navigate(self, url):
        self.call("Page.navigate", {"url": url})
        deadline = time.time() + 12
        while time.time() < deadline:
            if self.evaluate("document.readyState") == "complete" and self.evaluate("Boolean(document.querySelector('h1'))"):
                return
            time.sleep(0.1)
        raise RuntimeError(f"Page did not render: {url}")

    def screenshot(self, name):
        result = self.call("Page.captureScreenshot", {
            "format": "png",
            "fromSurface": True,
            "captureBeyondViewport": False,
        })
        (OUTPUT / name).write_bytes(base64.b64decode(result["data"]))


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    profile = tempfile.mkdtemp(prefix="europe-pwa-capture-")
    browser = subprocess.Popen([
        CHROME,
        "--headless=new",
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
        f"--remote-debugging-port={PORT}",
        f"--user-data-dir={profile}",
        "--window-size=1440,1000",
        f"{BASE_URL}?mockNow=2026-10-15T12:00:00%2B08:00",
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    try:
        page = wait_for_page()
        dev = DevTools(page["webSocketDebuggerUrl"])
        dev.call("Emulation.setDeviceMetricsOverride", {
            "width": 390,
            "height": 844,
            "deviceScaleFactor": 2,
            "mobile": True,
        })
        dev.navigate(f"{BASE_URL}?mockNow=2026-10-15T12:00:00%2B08:00")
        dev.screenshot("01-home-mobile.png")

        dev.evaluate("document.querySelector('[data-tab=days]').click()")
        time.sleep(0.2)
        dev.screenshot("02-days-mobile.png")
        dev.evaluate("document.querySelector('[data-day=d03]').click()")
        time.sleep(0.2)
        dev.screenshot("03-oesterfestival-mobile.png")

        dev.navigate(f"{BASE_URL}?mockNow=2026-10-27T10:22:00%2B01:00")
        dev.screenshot("04-goldenpass-alert-mobile.png")

        dev.evaluate("document.querySelector('[data-tab=verify]').click()")
        time.sleep(0.2)
        dev.screenshot("05-verify-mobile.png")

        dev.call("Emulation.setDeviceMetricsOverride", {
            "width": 1440,
            "height": 1000,
            "deviceScaleFactor": 1,
            "mobile": False,
        })
        dev.navigate(f"{BASE_URL}?mockNow=2026-10-15T12:00:00%2B08:00")
        dev.screenshot("06-home-desktop.png")
        print(f"PASS\t{OUTPUT}")
    finally:
        browser.terminate()
        try:
            browser.wait(timeout=5)
        except subprocess.TimeoutExpired:
            browser.kill()


if __name__ == "__main__":
    main()
