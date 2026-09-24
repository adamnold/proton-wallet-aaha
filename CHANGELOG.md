# Changelog

Last Updated: 2026-09-24

## v1.3.0 — 2026-09-24

- Updated from exact Electron 43.1.0 to exact Electron 44.4.5 (Chromium
  security fixes); no application source, security policy, or profile changes
  were needed for the Electron 44 breaking changes.
- Refreshed the locked build tooling to clear every `npm audit` finding,
  including the `brace-expansion`, `tar`, `undici`, and `js-yaml` advisories
  that had begun failing the required CI audit step on `master`.
- Supersedes the unmerged Copilot Electron 44.3.0 draft.

## v1.2.0 — 2026-07-23

- Reconciled documentation dates and corrected the bundled icon source path.
- Restored the regular Proton Wallet description on the hidden compatibility
  launcher while preserving its stable KDE panel identity and hidden status.
- Made validation builds explicitly non-publishing, added regression coverage,
  and upgraded the GitHub Actions runtimes used by CI.
- Updated the locked build dependency tree to use the patched `fast-uri` 3.1.4
  release.

## v1.1.1 — 2026-07-15

- Added the standard `~/.local/opt/aaha/proton-wallet-aaha` default and explicit
  custom-root installation without changing AppImage execution or wallet code.
- Added guarded installation receipts, identity markers, and regression tests
  for unsafe paths, mismatches, profile preservation, and purge.
- Made icon generation deterministic by removing variable PNG metadata.

## v1.1.0 — 2026-07-11

- Updated to exact Electron 43.1.0 and the AAHA v2 sandbox, navigation, permission, privacy, reproducible-build, icon, installer, checksum, test, and CI standard.
- Added explicit financial-risk QA boundaries and safe external on-ramp handling.

## v1.0.0

- Initial wrapper. Superseded because its Electron runtime is unsupported.
