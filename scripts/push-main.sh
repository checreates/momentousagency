#!/usr/bin/env bash
# Push momentousagency to GitHub (requires SSH key on GitHub + passphrase once per session)
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_DIR"

echo "→ Repo: $REPO_DIR"
echo "→ Remote:"
git remote -v

# Ensure SSH remote (HTTPS fails in non-interactive environments without stored creds)
if git remote get-url origin | grep -q '^https://'; then
  echo "→ Switching origin to SSH..."
  git remote set-url origin git@github.com:checreates/momentousagency.git
fi

# Load SSH key (prompts for passphrase if needed)
if ! ssh-add -l 2>/dev/null | grep -q id_ed25519; then
  echo "→ Adding SSH key (enter passphrase if prompted)..."
  ssh-add --apple-use-keychain ~/.ssh/id_ed25519 2>/dev/null || ssh-add ~/.ssh/id_ed25519
fi

echo "→ Testing GitHub SSH..."
if ! ssh -T git@github.com 2>&1 | grep -qi 'successfully authenticated'; then
  echo ""
  echo "SSH auth failed. Add this public key to GitHub → Settings → SSH keys:"
  echo ""
  cat ~/.ssh/id_ed25519.pub
  echo ""
  exit 1
fi

echo "→ Pushing main..."
git push origin main

echo "✓ Push complete. Vercel should redeploy automatically."
