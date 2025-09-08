import axios from "axios";

export default async function handler(req, res) {
  const BOT_TOKEN = process.env.BOT_TOKEN;  // environment variable
  const CHAT_ID = process.env.CHAT_ID;      // environment variable

  try {
    await axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      params: { chat_id: CHAT_ID, text: "New visitor at " + new Date().toLocaleString() },
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
