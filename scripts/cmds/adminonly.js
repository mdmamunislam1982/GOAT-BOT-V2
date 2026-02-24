const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "admin",
    version: "1.0",
    author: "ULLASH",
    countDown: 5,
    role: 0,
    shortDescription: "Show Owner Info",
    category: "info"
  },

  onStart: async function ({ api, event }) {

    const time = moment().tz("Asia/Dhaka")
      .format("DD/MM/YYYY hh:mm:ss A");

    const path = __dirname + "/cache/1.png";

    const callback = () => api.sendMessage({
      body: `
🌟 OWNER INFO 🌟

👤 Name : M A M U N ッ
🚹 Gender : Male
❤️ Relation : Fingel
🎂 Age : 19
🕌 Religion : Islam
🏫 Education : inter 1st year
🏡 Address : Rajshahi Dhaka, Bangladesh

🎭 Tiktok : Mamun01
📢 Telegram : t.me/John_USA90
🌐 Facebook :
https://www.facebook.com/md.mamun.islam3210

🕒 Updated Time: ${time}
      `,
      attachment: fs.createReadStream(path)
    }, event.threadID, () => fs.unlinkSync(path));

    request(
      "https://graph.facebook.com/100057754863882/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"
    )
      .pipe(fs.createWriteStream(path))
      .on("close", callback);
  }
};
