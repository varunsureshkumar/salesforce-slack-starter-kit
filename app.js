// eslint-disable-next-line import/no-unresolved
const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  port: process.env.PORT || 3000,
});

// eslint-disable-next-line no-unused-expressions
(async () => {
  // Start your app
  await app.start();
  // eslint-disable-next-line no-console
  console.log('~ Bolt app is running!');
});
