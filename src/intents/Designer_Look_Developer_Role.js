const { AttachmentBuilder, EmbedBuilder } = require("discord.js")
const { getDesigners, insertDeveloper } = require("../CRUD")
const BuildEmbed = require("../utility/BuildEmbed")

const Designer_Look_Developer_Role = (message,buffer)=> {
    let prompt = "Hey! "+ `<@${message.author.id}> Glad to know you are developer (added to you developers list), Here are designers \n \n`
    insertDeveloper(` <@${message.author.id}> `) 
    let designers = getDesigners() 
    if(designers != false){
        console.log(designers)
        designers.forEach(designer=>{
            prompt +=designer
        })
        if(designers.length == 0){
            prompt = "Hey! "+ `<@${message.author.id}> Glad to know you are developer (added to you developers list), I am sorry, there is no designer at the moment` 
        }
        const image = new AttachmentBuilder(buffer,{name:"image.png"}) 
    message.reply({prompt,files:[image],embeds: [BuildEmbed({prompt,title:"Finding Designers and Updating Profile"})]}) 
    }else{
        prompt = "Hey! "+ `<@${message.author.id}> Glad to know you are developer (added to you developers list), I am sorry, there is no designer at the moment` 
        const image = new AttachmentBuilder(buffer,{name:"image.png"}) 
    message.reply({prompt,files:[image],embeds: [BuildEmbed({prompt,title:"Here are following developers"})]}) 
    }
}
module.exports = Designer_Look_Developer_Role