import express from "express"
import axios from "axios"

const app = express()
const PORT = 3000

// 🔑 Replace with your  Bot Token and Chat ID
const BOT_TOKEN = "8320216341:AAEO3Gv8C5rQjOVDVGPi506uXf_0qBicTj4"
const CHAT_ID = "1442550840"

// Middleware to get visitor IP
app.set("trust proxy", true)

app.get("/", async (req, res) => {
  try {
    const visitorIP = req.ip || req.connection.remoteAddress
    const message = `🚀 New Visitor!\nIP: ${visitorIP}\nTime: ${new Date().toLocaleString()}`

    // Send Telegram message
    await axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      params: {
        chat_id: CHAT_ID,
        text: message,
      },
    })

    res.send("<h1>Welcome to my Website ✅</h1>")
  } catch (error) {
    console.error("❌ Error sending Telegram message:", error.message)
    res.send("Error sending notification")
  }
})

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`)
})
