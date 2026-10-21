/* Google Drive setup for Gymnasium No. 147 portal.
 * OAuth 2.0 Web application client ID is public; never put client secrets or access tokens here.
 * Folder IDs are the two shared folders provided for this portal.
 */
window.ADMIN147_DRIVE_CONFIG = {
  clientId: "766715950552-qhv4i1ahftu78lirnq9iv55hq5nco3o3.apps.googleusercontent.com",
  // Cloudflare Worker URL will be added after deploying ai-worker.js. Do not put API keys here.
  aiEndpoint: "gymnasium147-ai.ala147gymnasium.workers.dev",
  folderIds: {
    "Тәрбие жоспары": "1ewPJNa4gpfatC7tJ6_MVjEcqnbZ6HADC",
    "Мектепішілік бақылау жоспары": "1_I3clOi44hRyZzr7FYWP-PnsmHccrRfR"
  }
};
