# Screen LINE Bullets

You can use it on streaming platform(e.g. Twitch, Youtube...) by OBS.(If you don't know how to use, you could reference [the article](https://nijialin.com/2020/11/29/mac-stream-soundflower/)). It would be cool for your activities!

![](https://nijialin.com/images/2021/bullets/bullets-sample1.gif)

## Developing

You need to run `npm install` to import dependencies and run `npm run dev` to start servers both of **chatbot** and **frontend** folder.

Because LINE Chatbot need `SSL` certificate, so you can deploy `chatbot` code to **Heroku** or run [ngrok](https://ngrok.com/) to get a domain which is contain SSL.

# Chatbot as Backend

Run below commands:

```
npm install
cp .env.example .env # Input variables
npm run dev
```

## LINE account

- Got A LINE Bot API developer account
  Make sure you already registered, if you need use LINE Bot.

- Go to LINE Developer Console

  - Close `auto-reply` setting on "Messaging API" Tab.
  - Setup your basic account information. Here is some info you will need to know.

    - Callback URL: `https://{YOUR_URL}/webhooks/line`
    - Enable `Use webhook` checkbox.
    - Verify your webhook.

![](https://github.com/louis70109/Screen-LINE-Bullets/blob/master/LINE-bot-step.jpg)

- You will get following info, need to fill back in `.env` file at `chatbot` folder.

  - `Channel Secret`
  - `Channel Access Token` (You need to issue one here)

# Frontend as Screen Bullets

```
npm install
cp .env.example .env # Input variable
npm run dev
```

## Notes

- If `Localhost`, input `ws://localhost:3000` in `.env` variable.
- Else input `wss://YOUR_DOMAIN`.

# LICENSE

[MIT](https://github.com/louis70109/Screen-LINE-Bullets/blob/master/LICENSE)
