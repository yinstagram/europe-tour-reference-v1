#!/usr/bin/env bash
set -u

project_dir="$(cd "$(dirname "$0")/.." && pwd)"
url_file="$project_dir/tmp/official-urls.txt"
report_file="$project_dir/tmp/link-check.tsv"

rg -o "https://[^'\"[:space:]]+" "$project_dir/data.js" \
  | sed 's/[),.;]$//' \
  | sort -u > "$url_file"

: > "$report_file"
while IFS= read -r url; do
  result="$(curl -sIL --max-time 25 -o /dev/null -w '%{http_code}\t%{url_effective}' "$url")"
  printf '%s\t%s\n' "$result" "$url" >> "$report_file"
done < "$url_file"

awk -F '\t' 'BEGIN { bad=0 } $1 !~ /^(200|301)$/ { print "BAD\t" $0; bad=1 } END { exit bad }' "$report_file"
