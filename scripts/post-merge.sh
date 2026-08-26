#!/usr/bin/env bash
set -euo pipefail

# Keep merged environments reproducible and verify that the app still builds.
npm ci --no-audit --no-fund
npm run build