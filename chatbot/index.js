//import express 和 ws 套件
const express = require('express'),
  SocketServer = require('ws').Server,
  line = require('@line/bot-sdk');
if (process.env.NODE_ENV != 'production') require('dotenv').config();

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
  },
  client = new line.Client(config),
  PORT = process.env.PORT || 3000,
  app = express();
let BULLETS = '',
  USER_AVATAR = ''; //default message
async function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  const user = await client.getProfile(event.source.userId);
  BULLETS = await event.message.text;
  USER_AVATAR = await user.pictureUrl;
  console.log(BULLETS);
  console.log(USER_AVATAR);

  const echo = { type: 'text', text: event.message.text };

  return client.replyMessage(event.replyToken, echo);
}

app.post('/webhooks/line', line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
  console.log(`Client connected, port is ${PORT}`);
  // Send global message to Client in the schedule.
  const sendNowTime = setInterval(() => {
    ws.send(JSON.stringify({ text: BULLETS, avatar: USER_AVATAR }));
    BULLETS = '';
    avatar = ''; // Refresh
  }, 2000);

  ws.on('message', (data) => ws.send(data));

  ws.on('close', () => {
    clearInterval(sendNowTime);
    console.log('Close connected');
  });
});
