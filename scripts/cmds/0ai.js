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
        await message.reply(",😗🍷𝑆𝑎𝑙𝑢𝑡, 𝑚𝑜𝑖 𝑐'𝑒𝑠𝑡 𝑝𝑜𝑤𝑒𝑟 
𝑄𝑢𝑒𝑙 𝑒𝑠𝑡 𝑣𝑜𝑡𝑟𝑒 𝑞𝑢𝑒𝑠𝑡𝑖𝑜𝑛❓");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `𝑉𝑂𝐼𝐶𝐼 𝐿𝐴 𝑅𝐸𝑃𝑂𝑁𝑆𝐸 À 𝑉𝑂𝑇𝑅𝐸 𝑄𝑈𝐸𝑆𝑇𝐼𝑂𝑁 😗🍷
━━━━━━━━━━━━━        
${answer}
━━━━━━━━━━━━━`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};