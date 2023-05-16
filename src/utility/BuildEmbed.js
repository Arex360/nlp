const { EmbedBuilder } = require("discord.js");
// https://imgur.com/XAFrUZM.gif
let counter = 1
let images = ["https://imgur.com/XAFrUZM.gif","https://imgur.com/rNSAywZ.gif"]
const BuildEmbed = ({title,prompt})=>{
    const exampleEmbed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle(title)
  .setURL('https://discord.js.org/')
  .setAuthor({ name: 'AI MatchMaker', iconURL: 'https://imgur.com/Wz14mCj.png', url: 'https://discord.js.org' })
  .setDescription(prompt)
  .setThumbnail('https://imgur.com/Wz14mCj.png')
  .setImage(counter % 2 == 0 ? images[0] : images[1])
  .setTimestamp()
  .setFooter({ text: 'If found any wrong result, please report to Arex', iconURL: 'https://imgur.com/Wz14mCj.png' });
  counter++
  return exampleEmbed
}
module.exports = BuildEmbed