const { AttachmentBuilder } = require("discord.js")
const { getDevelopers } = require("../CRUD")
const BuildEmbed = require("../utility/BuildEmbed")

const Developer_Look = (message,buffer)=>{
    let prompt = ""
    let developers = getDevelopers() 
    if(developers != false){
        developers.forEach(developer=>{
            prompt += developer + '\n \n'
        })
        const image = new AttachmentBuilder(buffer,{name:"image.png"})
    message.reply({prompt,files:[image],embeds: [BuildEmbed({prompt,title:"Here are following developers"})]}) 
    }
}
module.exports = Developer_Look