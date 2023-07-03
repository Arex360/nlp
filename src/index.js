
const { Client, GatewayIntentBits,AttachmentBuilder ,EmbedBuilder} = require('discord.js');
const { Predict } = require('./NLP');
const dotenv = require('dotenv')
const actions = require('./action')
const fs = require('fs');
const { execSync } = require('child_process');
const Slap = require('./intents/Slap');
const Developer_Role = require('./intents/Developer_Role');
const Developer_Look = require('./intents/Developer_Look');
const Designer_Look = require('./intents/Designer_look');
const DesignerRole = require('./intents/Designer_Role');
const Artist_Look = require('./intents/Artist_Look');
const ArtistRole = require('./intents/Artist_Role');
const Help = require('./intents/Help');
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
  const content = message.content.toLowerCase()
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
if(content.startsWith("!match ?")){
  fs.readFile('header.png', (err, data) => {
    if (err) {
      console.error('Error reading image file:', err);
      return;
    }
    const buffer = Buffer.from(data);
    Help(message,buffer)
    console.log('Image successfully loaded into buffer:', buffer);
  });
}
// Finding Developer
if(message.content.startsWith("!find dev")){
  fs.readFile('header.png', (err, data) => {
    if (err) {
      console.error('Error reading image file:', err);
      return;
    }
    const buffer = Buffer.from(data);
    Developer_Look(message,buffer)
    console.log('Image successfully loaded into buffer:', buffer);
  });   
}

// Registering Developer
if(content.startsWith("!register dev")){
  fs.readFile('header.png', (err, data) => {
    if (err) {
      console.error('Error reading image file:', err);
      return;
    }
    const buffer = Buffer.from(data);
    Developer_Role(message,buffer)
    console.log('Image successfully loaded into buffer:', buffer);
  });   
}
// Finding Designer
if(content.startsWith("!find designer")){
  fs.readFile('header.png', (err, data) => {
    if (err) {
      console.error('Error reading image file:', err);
      return;
    }
    const buffer = Buffer.from(data);
    Designer_Look(message,buffer)
    console.log('Image successfully loaded into buffer:', buffer);
  });   
}

// Registering Designer
if(content.startsWith("!register designer")){
  fs.readFile('header.png', (err, data) => {
    if (err) {
      console.error('Error reading image file:', err);
      return;
    }
    const buffer = Buffer.from(data);
    DesignerRole(message,buffer)
    console.log('Image successfully loaded into buffer:', buffer);
  });   
}
// Finding Artist
if(content.startsWith("!find artist")){
  fs.readFile('header.png', (err, data) => {
    if (err) {
      console.error('Error reading image file:', err);
      return;
    }
    const buffer = Buffer.from(data);
    Artist_Look(message,buffer)
    console.log('Image successfully loaded into buffer:', buffer);
  });   
}

// Registering Artist
if(content.startsWith("!register artist")){
  fs.readFile('header.png', (err, data) => {
    if (err) {
      console.error('Error reading image file:', err);
      return;
    }
    const buffer = Buffer.from(data);
    ArtistRole(message,buffer)
    console.log('Image successfully loaded into buffer:', buffer);
  });   
}
// slap
 if(message.content.startsWith("!slap")){
      const sender = message.author.username
      const victom = message.mentions.users.first().username
      Slap(message, sender,victom)
 }

});
client.login(token);