const { AttachmentBuilder, EmbedBuilder } = require("discord.js")
const { insertDeveloper } = require("../CRUD")
const BuildEmbed = require("../utility/BuildEmbed")

const Developer_Role =   (message,buffer)=>{
    let prompt = "Hey! "+ `<@${message.author.id}> Nice to know you are a developer, will notify you if someone need a game developer`
    insertDeveloper(` <@${message.author.id}>  `)
    const image = new AttachmentBuilder(buffer,{name:"image.png"})
    message.reply({prompt,files:[image],embeds: [BuildEmbed({prompt,title:"Here are following developers"})]}) 
}
module.exports = Developer_Role