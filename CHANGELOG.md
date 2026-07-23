# Changelog

## v1.2.0 — 2026-07-23

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
