/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
import pkg from '@slack/bolt';

const { App } = pkg;

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
  console.log('⚡️ Bolt app is running!');
})();

app.shortcut('who_am_i', async ({ shortcut, ack, client }) => {
  try {
    // Acknowledge shortcut request
    await ack();
    // Call the views.open method using one of the built-in WebClients
    const result = await client.views.open({
      trigger_id: shortcut.trigger_id,
      view: {
        type: 'modal',
        title: {
          type: 'plain_text',
          text: 'My Bolt App',
        },
        close: {
          type: 'plain_text',
          text: 'Close',
        },
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: 'Hello!',
            },
          },
        ],
      },
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});
