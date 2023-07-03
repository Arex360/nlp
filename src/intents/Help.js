const { AttachmentBuilder, EmbedBuilder } = require("discord.js")
const { insertDeveloper } = require("../CRUD")
const BuildEmbed = require("../utility/BuildEmbed")

const Help =   (message,buffer)=>{
    let prompt = "Hey! "+ `<@${message.author.id}> Here are Commands

     !find dev       |   Helps you find the developers 
     !find artist    |   Helps you find ths artists  
     !find designer  |   Helps you find the designers

     ================================
     To Nominate yourself
     ================================

     !register dev       |   Add you as developer
     !register artist    |   Add you as artist
     !register designer  |   Add you as designer
    
    `
    insertDeveloper(` <@${message.author.id}>  `)
    const image = new AttachmentBuilder(buffer,{name:"image.png"})
    message.reply({prompt,files:[image],embeds: [BuildEmbed({prompt,title:"Help"})]}) 
}
module.exports = Help