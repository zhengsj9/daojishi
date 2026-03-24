#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TARGET_DIR="$ROOT_DIR/android/app/src/main/assets/www"

rm -rf "$TARGET_DIR"
mkdir -p "$TARGET_DIR/icons"

cp "$ROOT_DIR/index.html" "$TARGET_DIR/"
cp "$ROOT_DIR/styles.css" "$TARGET_DIR/"
cp "$ROOT_DIR/script.js" "$TARGET_DIR/"
cp "$ROOT_DIR/app.webmanifest" "$TARGET_DIR/"
cp "$ROOT_DIR/sw.js" "$TARGET_DIR/"
cp "$ROOT_DIR/icons/"* "$TARGET_DIR/icons/"

echo "Synced web assets to $TARGET_DIR"
