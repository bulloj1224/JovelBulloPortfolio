# JOVELBULLO_PORTFOLIO

This project is a portfolio website with a built-in AI chat widget.

## What was added

- `server.js` — an Express server that serves your static pages and provides a `/chat` endpoint.
- `chat.js` — connects the chat widget to the backend and sends user prompts to OpenAI.
- `package.json` — dependencies for the server.
- `.gitignore` — ignores `node_modules` and `.env`.

## How to run locally

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project folder with:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

3. Start the server:

```bash
npm start
```

4. Open the site in your browser:

```text
http://localhost:3000
```

## Notes

- The chat widget is now connected to OpenAI via the server.
- The site remains static on the frontend, while the server handles AI requests securely.
- If you publish this online, make sure to keep the API key secret on the backend and never expose it in client-side JavaScript.

## Deploying to Render

1. Push your project to a GitHub repository.
2. Go to https://render.com and create a new Web Service.
3. Connect your repository and choose the `main` branch.
4. Use `npm install` as the build command and `npm start` as the start command.
5. Add an environment variable named `OPENAI_API_KEY` with your OpenAI key.
6. Deploy the service.

Your app will be available at a Render URL such as `https://jovelbullo-portfolio.onrender.com`.

> If you want, I can also help you set this up with Railway or Vercel instead.
