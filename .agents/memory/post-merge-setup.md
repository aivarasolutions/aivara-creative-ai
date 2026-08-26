---
name: Post-merge setup
description: Workspace-specific constraint for configuring the automatic setup run after task merges.
---

The automatic merge setup requires a real script path configured in the workspace post-merge settings; direct edits to `.replit` are protected and should be avoided.

**Why:** A merged task failed when no hook path was configured, and the platform rejected a direct `.replit` edit instead of applying it.

**How to apply:** Keep the hook idempotent, non-interactive, and fast. Configure it through the validated post-merge settings interface and verify it by running the setup once.