
const { Client, GatewayIntentBits,AttachmentBuilder ,EmbedBuilder} = require('discord.js');
const { Predict } = require('./NLP');
const { insertDeveloper, getDesigners, getDevelopers, insertDesigner ,artists,designers,developers,getArtists,insertArtist} = require('./CRUD');
const dotenv = require('dotenv')
const actions = require('./action')
const fs = require('fs');
dotenv.config()
const token = process.env.TOKEN
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,] });
const BuildEmbed = ({title,prompt})=>{
    const exampleEmbed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle(title)
  .setURL('https://discord.js.org/')
  .setAuthor({ name: 'AI MatchMaker', iconURL: 'https://imgur.com/Wz14mCj.png', url: 'https://discord.js.org' })
  .setDescription(prompt)
  .setThumbnail('https://imgur.com/Wz14mCj.png')
  .setImage('https://imgur.com/XAFrUZM.gif')
  .setTimestamp()
  .setFooter({ text: 'If found any wrong result, please report to Arex', iconURL: 'https://imgur.com/Wz14mCj.png' });
  return exampleEmbed
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("messageCreate", async (message,buffer) => {
  console.log(message,buffer)
if (message.content.startsWith("!mlab")) {
    const intent = await Predict(message.content)
    console.log(intent)
    fs.readFile('header.png', (err, data) => {
        if (err) {
          console.error('Error reading image file:', err);
          return;
        }
      
        const buffer = Buffer.from(data);
        
        actions[intent](message,buffer)
        console.log('Image successfully loaded into buffer:', buffer);
      });
    
} 
});
client.login(token);