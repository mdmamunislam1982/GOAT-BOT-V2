module.exports = {
  config: {
    name: "info",
    version: "1.0",
    author: "ADMIN BAPPI",
    countDown: 5,
    role: 0,
    shortDescription: "Show admin info",
    longDescription: "Display bot owner information",
    category: "info",
    guide: "{pn}"
  },

  onStart: async function ({ message, api, event }) {

    const adminInfo = `
👑 𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 𝗜𝗡𝗙𝗢 👑

🧑 Owner : Md Mamun Islam 
🤖 Bot Name : GoatBot V2
⚙️ Version : 1.0
🌐 Platform : Messenger
📌 Prefix : /
💻 Status : Running ✅

✨ Thanks for using GoatBot
`;

    return message.reply(adminInfo);
  }
};
