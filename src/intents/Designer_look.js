const { AttachmentBuilder, EmbedBuilder } = require("discord.js")
const BuildEmbed = require("../utility/BuildEmbed")
const { getDesigners } = require("../CRUD")

const Designer_Look = (message,buffer)=> {
    let prompt = "Hey! "+ `<@${message.author.id}> , Here are some designers \n \n `
    const myDesigners = getDesigners()
    if(myDesigners != false){
        console.log("found designers")
        myDesigners.forEach(designer=>{
            prompt +=designer
        })
        if(myDesigners.length == 0){
            prompt = "Hey! "+ `<@${message.author.id}> , I am sorry, there is no designer at the moment` 
        }
        const image = new AttachmentBuilder(buffer,{name:"image.png"})
    message.reply({prompt,files:[image],embeds: [BuildEmbed({prompt,title:"Looking for designer"})]}) 
    }else{
        console.log("designer not found")
        prompt = "Hey! "+ `<@${message.author.id}> , I am sorry, there is no designer at the moment`
        const image = new AttachmentBuilder(buffer,{name:"image.png"}) 
    message.reply({prompt,files:[image],embeds: [BuildEmbed({prompt,title:"Ops"})]}) 
    }
}
module.exports = Designer_Look