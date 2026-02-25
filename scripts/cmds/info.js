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
━━━━━━━━━━━━━━━━━━━━━┓
‎┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
‎┣━━━━━━━━━━━━━━━━━━━━━┫
‎┃ 👤 Name      : M A M U N ッ
‎┃ 🚹 Gender    : Male
‎┃ ❤️ Relation  : Single
‎┃ 🎂 Age       : 19
‎┃ 🕌 Religion   : Islam
‎┃ 🏫 Education : Inter 1st Year
‎┃ 🏡 Address   : Rajshahi, Bangladesh
‎┣━━━━━━━━━━━━━━━━━━━━━┫
‎┃ 🎭 Tiktok    : Mamun01
‎┃ 📢 Telegram  : t.me/John_USA90
‎┃ 🌐 Facebook  : https://www.facebook.com/md.mamun.islam3210
‎┣━━━━━━━━━━━━━━━━━━━━━┫
‎┃ 🕒 Updated Time: ${time}
‎┗━━━━━━━━━━━━━━━━━━━━━┛
‎    
`;

    return message.reply(adminInfo);
  }
};
