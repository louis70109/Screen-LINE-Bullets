# Screen LINE Bullets

You can use it on streaming platform(e.g. Twitch, Youtube...) by OBS.(If you don't know how to use, you could reference [the article](https://nijialin.com/2020/11/29/mac-stream-soundflower/)). It would be cool for your activities!


## Details

- LINE Chatbot
  - Avatar is from `getProfile` Bot API
  - Get messages from `Webhook event` and send messages by `Websocket`
- Frontend
    - use `setInterval` to schedule receive messages.

## LINE account

- Got A LINE Bot API developer account
  Make sure you already registered, if you need use LINE Bot.

- Go to LINE Developer Console
  - Close auto-reply setting on "Messaging API" Tab.
  - Setup your basic account information. Here is some info you will need to know.
    - Callback URL: `https://{YOUR_URL}/webhooks/line`
    - Verify your webhook.
    - Enable bot join group button.
- You will get following info, need fill back to `.env` file.
  - Channel Secret
  - Channel Access Token (You need to issue one here)


# LICENSE

MIT
