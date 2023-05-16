const { EmbedBuilder } = require("discord.js");
// https://imgur.com/XAFrUZM.gif
const BuildEmbed = ({title,prompt})=>{
    const exampleEmbed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle(title)
  .setURL('https://discord.js.org/')
  .setAuthor({ name: 'AI MatchMaker', iconURL: 'https://imgur.com/Wz14mCj.png', url: 'https://discord.js.org' })
  .setDescription(prompt)
  .setThumbnail('https://imgur.com/Wz14mCj.png')
  .setImage('https://imgur.com/rNSAywZ.gif')
  .setTimestamp()
  .setFooter({ text: 'If found any wrong result, please report to Arex', iconURL: 'https://imgur.com/Wz14mCj.png' });
  return exampleEmbed
}
module.exports = BuildEmbed