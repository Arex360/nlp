const { AttachmentBuilder, EmbedBuilder } = require("discord.js")
const { insertDeveloper } = require("../CRUD")
const BuildEmbed = require("../utility/BuildEmbed")
const fs = require("fs")
const {execSync} = require('child_process')
const Slap =   (message,attacker,victom)=>{
    let prompt = "Hey! "+ `<@${message.author.id}>`
    insertDeveloper(` <@${message.author.id}>  `)
    execSync(`python3 intents/slap.py --gif_path intents/slap.gif --output_path out.gif --attacker "${attacker}" --victim "${victom}"`)
    fs.readFile('out.gif', (err, data) => {
        if (err) {
          console.error('Error reading image file:', err);
          return;
        }
        const buffer = Buffer.from(data);
        const image = new AttachmentBuilder(buffer,{name:"image.gif"})
        message.reply({prompt,files:[image]})
      });
   
}
module.exports = Slap