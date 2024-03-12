const axios = require('axios');

const Prefixes = [
  '/ai',
  'bot',
  'Nemo',
  '+ai',
  'nemo',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {

      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("╔═❖•ೋ° °ೋ•❖═╗𝑳'𝑰𝑵𝑽𝑰S𝑰𝑩𝑳𝑬 
𝒑𝒐𝒖𝒓 𝒗𝒐𝒖𝒔 𝒂𝒊𝒅𝒆𝒓
 𝑳𝑰𝑬𝑵 𝑫𝑬 𝑳'𝑨𝑫𝑴𝑰𝑵 : https://www.facebook.com/profile.php?id=61553392844761 ╚═❖•ೋ° °ೋ•❖═╝");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;


    await message.reply({ body: `
   ✨ 𝐌𝐈𝐂𝐊𝐄𝐘 ✨
𝑽𝑶𝑰𝑪𝑰 𝑳𝑬 𝑹𝑬S𝑼𝑳𝑻𝑨𝑻
𝑫𝑬 𝑽𝑶𝑻𝑹𝑬 𝑸𝑼𝑬𝑺𝑻𝑰𝑶𝑵
━━━━━━━━━━━━━        
${answer}
━━━━━━━━━━━━━
𝑳𝑰𝑬𝑵 𝑫𝑬 𝑳’𝑨𝑫𝑴𝑰𝑵: https://www.facebook.com/profile.php?id=61553392844761`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};