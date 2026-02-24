module.exports = {
  config: {
    name: "kiss",
    version: "1.0",
    author: "mamun",
    countDown: 5,
    role: 0,
    shortDescription: "Send a kiss 💋",
    longDescription: "Kiss someone in the chat",
    category: "fun",
    guide: "{pn} @mention"
  },

  onStart: async function ({ api, event, args, usersData }) {

    const mention = Object.keys(event.mentions);

    if (mention.length === 0) {
      return api.sendMessage("💋 | Tag someone to kiss!", event.threadID);
    }

    const senderName = await usersData.getName(event.senderID);
    const targetName = await usersData.getName(mention[0]);

    const kissGifs = [
      "https://i.imgur.com/7rl9E2K.gif",
      "https://i.imgur.com/Vl6Zp.gif",
      "https://i.imgur.com/8Gh7Q.gif",
      "https://i.imgur.com/kissanime.gif"
    ];

    const randomGif =
      kissGifs[Math.floor(Math.random() * kissGifs.length)];

    api.sendMessage(
      {
        body: `💋 ${senderName} kissed ${targetName}! ❤️`,
        attachment: await global.utils.getStreamFromURL(randomGif)
      },
      event.threadID
    );
  }
};
