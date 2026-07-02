// ============================================================
//  APP CONFIG  —  This is the ONLY file you edit per app.
//  Change these values, swap the icon in icons/, rebuild.
// ============================================================
module.exports = {
  // The web app you want to wrap:
  url: "https://wallet.proton.me",

  // Display name (shows in title bar, launcher, panel tooltip):
  name: "Proton Wallet",

  // Wayland/X11 window identity. MUST match productName in package.json
  // and StartupWMClass in the .desktop file so KDE keeps your icon.
  wmClass: "Proton Wallet",

  // Reverse-DNS app id — unique per app.
  appId: "com.adamandhisagents.protonwallet",

  // Initial window size:
  width: 1280,
  height: 800,

  // Open external links (e.g. links that leave the app's domain)
  // in your real browser instead of inside the app window:
  openExternalInBrowser: true,

  // Restrict in-app navigation to wallet.proton.me only. Sign-in flows
  // and account management may redirect to account.proton.me; those hosts
  // are also on proton.me so this suffix keeps the full flow in-app.
  allowedHosts: ["proton.me"],

  // Optional custom user-agent. Leave null for Electron's default.
  userAgent: null,

  // PRIVACY HARDENING (default: ON). Disables Chromium's background
  // networking, domain-reliability beacons, component updates, network-time
  // queries, translate, optimization hints, and crash metrics, so the app
  // only talks to Proton. Set to true only if something breaks.
  disableHardening: false
};
