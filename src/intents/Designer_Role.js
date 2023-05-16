const { AttachmentBuilder, embedLength } = require("discord.js")
const { insertDesigner } = require("../CRUD")
const BuildEmbed = require("../utility/BuildEmbed")

const DesignerRole =  (message,buffer)=>{
    let prompt = "Hey! "+ `<@${message.author.id}> Nice to know you are a designer, will notify you if someone need a game designer`
    insertDesigner(` <@${message.author.id}>  `) 
    const image = new AttachmentBuilder(buffer,{name:"image.png"})
    message.reply({prompt,files:[image],embeds: [BuildEmbed({prompt,title:"Good luck"})]}) 
}
module.exports = DesignerRole