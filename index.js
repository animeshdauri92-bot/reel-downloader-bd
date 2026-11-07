const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.post("/api/check", (req, res) => {
  const url = String(req.body.url || "").trim();
  let parsed;
  try { parsed = new URL(url); } catch { return res.status(400).json({error:"সঠিক URL দিন।"}); }
  if (!["http:", "https:"].includes(parsed.protocol)) {
    return res.status(400).json({error:"শুধু HTTP/HTTPS লিংক গ্রহণযোগ্য।"});
  }
  const host = parsed.hostname.toLowerCase();
  const social = /(^|\\.)((tiktok\\.com)|(facebook\\.com)|(fb\\.watch))$/.test(host);
  if (social) {
    return res.status(501).json({
      error:"TikTok/Facebook-এর শেয়ার লিংক সরাসরি ডাউনলোড এখানে এখনো চালু নয়। প্ল্যাটফর্মের অনুমোদিত Download/Save অপশন ব্যবহার করুন, অথবা নিজের ভিডিওর সরাসরি MP4 ফাইল লিংক দিন।"
    });
  }
  if (!/\\.(mp4|webm|mov)(\\?|#|$)/i.test(parsed.pathname + parsed.search + parsed.hash)) {
    return res.status(400).json({error:"এটি সরাসরি ভিডিও ফাইলের লিংক নয়। MP4/WebM/MOV ফাইলের URL দিন।"});
  }
  return res.json({ok:true, downloadUrl:url, message:"সরাসরি ভিডিও ফাইল পাওয়া গেছে।"});
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Reel Downloader BD running on ${port}`));
