const axios = require("axios");

module.exports = {
  config: {
    name: "kiss",
    version: "3.0",
    author: "ADMIN BAPPI",
    countDown: 8, // delay increase
    role: 0,
    shortDescription: "Send a kiss 💋",
    category: "fun",
    guide: "{pn} @mention"
  },

  onStart: async function ({ api, event }) {

    if (!event.mentions || Object.keys(event.mentions).length === 0) {
      return api.sendMessage("💋 কাউকে mention করো!", event.threadID);
    }

    const uid = Object.keys(event.mentions)[0];
    const name = event.mentions[uid];

    async function getKiss() {
      try {
        // new stable API
        const res = await axios({
          method: "GET",
          url: "https://api.waifu.pics/sfw/kiss",
          timeout: 10000
        });
        return res.data.url;
      } catch (err) {

        // auto retry if 429
        if (err.response && err.response.status === 429) {
          await new Promise(r => setTimeout(r, 3000));
          return await getKiss();
        }
        throw err;
      }
    }

    try {
      const img = await getKiss();

      api.sendMessage({
        body: `💋 ${name} কে Kiss দিলো 😘`,
        attachment: await global.utils.getStreamFromURL(img)
      }, event.threadID);

    } catch (e) {
      console.log(e);
      api.sendMessage("⚠️ API busy! পরে আবার try করো.", event.threadID);
    }
  }
};
