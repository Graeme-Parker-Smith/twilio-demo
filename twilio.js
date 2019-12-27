const twilio = require("twilio");
const { accountSid, authToken } = require("./tokens.js");

module.exports = new twilio.Twilio(accountSid, authToken);
