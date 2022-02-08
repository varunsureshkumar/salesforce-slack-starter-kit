/* eslint-disable no-console */
// helpers/slackBot.js
// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios').default;
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

/**
 * slackMessage helper method
 * @param {string} msg
 * @returns {Boolean} True or False
 */
const slackMessage = (msg) => {
  const data = { text: `${process.env.NODE_ENV} : ${msg}` };

  axios({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    url: process.env.ELANYTICSBOT_SLACK_HOOK,
    data,
  }).then(
    (response) => {
      console.log(response.status);
    },
    (error) => {
      console.log(error);
    },
  );
};

export default { slackMessage };
