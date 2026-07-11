"use strict";
module.exports = {
  schemaVersion: 2, configured: true,
  repoName: "proton-wallet-aaha", productName: "Proton Wallet",
  appId: "com.adamandhisagents.protonwallet", executable: "proton-wallet-aaha",
  iconName: "proton-wallet-aaha", profileName: "Proton Wallet",
  legacyProfileNames: [], compatibilityDesktopIds: ["proton-wallet"],
  url: "https://wallet.proton.me", trustedNavigationHosts: ["proton.me"], trustedAuthHosts: [],
  permissions: { "clipboard-sanitized-write": ["proton.me"] },
  blockedHosts: ["clients2.google.com", "clients4.google.com", "update.googleapis.com", "safebrowsing.googleapis.com", "optimizationguide-pa.googleapis.com", "redirector.gvt1.com", "google-analytics.com", "www.google-analytics.com", "stats.g.doubleclick.net"],
  externalProtocols: ["http:", "https:", "mailto:"], openExternalLinks: true,
  width: 1360, height: 860, category: "Network;Finance;",
  comment: "Self-custodial Bitcoin wallet by Proton", keywords: "bitcoin;wallet;finance;proton;"
};
