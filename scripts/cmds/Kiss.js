const axios = require("axios");

module.exports = {
  config: {
    name: "kiss",
    version: "2.0",
    author: "ADMIN BAPPI",
    countDown: 5,
    role: 0,
    shortDescription: "Send a kiss 💋",
    longDescription: "Kiss someone in chat",
    category: "fun",
    guide: "{pn} @mention"
  },

  onStart: async function ({ api, event }) {

    if (!event.mentions || Object.keys(event.mentions).length == 0) {
      return api.sendMessage("💋 কাউকে mention করো!", event.threadID);
    }

    const mention = Object.keys(event.mentions)[0];
    const name = event.mentions[mention];

    try {

      // safer API (less 429 error)
      const res = await axios.get(
        "https://nekos.life/api/v2/img/kiss"
      );

      const img = res.data.url;

      api.sendMessage(
        {
          body: `💋 ${name} কে Kiss দিলো 😘`,
          attachment: await global.utils.getStreamFromURL(img)
        },
        event.threadID
      );

    } catch (e) {
      console.log(e);
      api.sendMessage(
        "⚠️ API busy, একটু পরে আবার চেষ্টা করো!",
        event.threadID
      );
    }
  }
};
