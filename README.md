# Reel Downloader BD

A small Express website starter. It validates direct video-file URLs (MP4/WebM/MOV) and offers the source file to open/save. It intentionally does not scrape or bypass TikTok/Facebook protections. Their share links currently show an explanatory message.

## Run locally
1. Install Node.js 18+
2. In this folder run: `npm install`
3. Run: `npm start`
4. Open `http://localhost:3000`

## Free deployment (Render)
1. Create a GitHub account and upload this project as a repository.
2. Sign in to Render and create **New > Web Service**, connecting that repository.
3. Runtime: Node; Build command: `npm install`; Start command: `npm start`.
4. Choose the free instance if available. Render gives you a `*.onrender.com` address; a paid custom domain is not required.
5. Note: free services may sleep when idle.

For real TikTok/Facebook downloading, use only a compliant provider/API that is authorized for the intended content and platform. Do not promise watermark removal or HD when the source/API does not provide it.
