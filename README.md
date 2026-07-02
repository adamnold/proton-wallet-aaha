# Proton Wallet (AAHA)

A native **Proton Wallet desktop app for Linux**, built with Electron by
**Adam And His Agents (AAHA)**. It wraps the official Proton Wallet web
app (`https://wallet.proton.me`) in a clean, standalone window that
behaves like a real desktop application — including a **stable taskbar
icon that KDE Plasma on Wayland will NOT swap for the generic browser
icon**.

> **Unofficial / not affiliated with Proton.** This is a third-party
> wrapper. It is not endorsed by or affiliated with Proton AG. "Proton"
> and "Proton Wallet" are trademarks of Proton AG. See `NOTICE` for
> details. Your use of Proton Wallet remains subject to Proton's own
> Terms of Service.

Proton Wallet may be invite-gated at any given time; if you can't sign in
inside this wrapper you also can't sign in on the web — it's not a
wrapper problem.

---

## Why this exists

KDE on Wayland picks an app's panel icon from the window's `app_id`
(WM class) and matches it to a `.desktop` file. Chromium-based PWAs all
share Chromium's identity, so KDE falls back to the generic browser icon.

A real Electron app sets its **own** `app_id` (`app.setName()` + `--class`)
and ships a `.desktop` file whose `StartupWMClass` matches exactly. KDE
finds a unique match, so your icon sticks.

---

## Requirements (Fedora / KDE example)

```bash
sudo dnf install nodejs npm fuse fuse-libs
```

(On Debian/Ubuntu: `sudo apt install nodejs npm libfuse2`.)

---

## Build & install

From the project folder:

```bash
chmod +x *.sh
./build.sh
./install.sh
```

Then open your app launcher, search "Proton Wallet", launch it, and pin
it to your taskbar/panel.

Build outputs:
- `dist/linux-unpacked/` — the native unpacked app
- `dist/*.AppImage` — a portable single-file version

To remove it later: `./uninstall.sh`

---

## Configuration (`app.config.js`)

| Field                   | Value                                            |
|-------------------------|--------------------------------------------------|
| `url`                   | `https://wallet.proton.me`                       |
| `name`                  | `Proton Wallet`                                  |
| `wmClass`               | `Proton Wallet`                                  |
| `appId`                 | `com.adamandhisagents.protonwallet`              |
| `allowedHosts`          | `["proton.me"]` (covers `account.proton.me` sign-in) |
| `disableHardening`      | `false` (privacy hardening ON)                   |

---

## Privacy hardening (on by default)

Chromium background/phone-home subsystems are disabled by default. The
app should only talk to Proton. To opt out, set `disableHardening: true`
in `app.config.js`. Verify with:

```bash
sudo tcpdump -n -i any 'port 53 or port 443' | grep -Ei 'google|gstatic|gvt|1e100'
```

---

## Notes / gotchas

- Session data lives in `~/.config/Proton Wallet/`, NOT in the project
  folder. Never committed to git or shipped in the AppImage.
- Single-instance lock: clicking the icon focuses the existing window.
- Each app bundles its own Electron runtime (~150–250 MB).

---

## License

Copyright 2026 **Adam And His Agents (AAHA)**. Wrapper code licensed
under the **Apache License, Version 2.0** — see `LICENSE`. This license
applies only to the code authored here; it does not cover Proton Wallet,
Proton's software/service, or Proton's trademarks and logos. See `NOTICE`.
