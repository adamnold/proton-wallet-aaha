# Proton Wallet for Linux — AAHA

Last Updated: 2026-07-23

Unofficial Proton Wallet Electron desktop app for Fedora KDE with a stable Wayland taskbar icon.

## Security and privacy notice

This is a self-custodial Bitcoin interface. Protect seed phrases and verify addresses independently. Electron is Chromium-based; the wrapper reduces optional background traffic and adds no AAHA telemetry, but Proton, Bitcoin infrastructure, authentication, pricing, and user-selected on-ramp providers remain required. See PRIVACY.md.

The wrapper never adds transaction or key-management code. On-ramp and
unrelated links open in the system browser. The AppImage runs directly from any
location; optional integration defaults to
`~/.local/opt/aaha/proton-wallet-aaha` and accepts
`--install-root /absolute/path/proton-wallet-aaha`. Normal uninstall preserves
`~/.config/Proton Wallet`; `--purge` removes the local profile after receipt and
marker validation but does not delete a wallet or recover funds.

This project is unofficial and is not affiliated with Proton.
