export default {
  baseUrl: "http://localhost:5173",
  fixturesFolder: "cypress/fixtures",
  integrationFolder: "cypress/integration",
  pluginsFile: "cypress/plugins/index.ts",
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  supportFile: "cypress/support/index.ts",
  testFiles: "**/*.spec.ts",
  video: true,
  videoCompression: 32,
  videoUploadOnPasses: false,
};
