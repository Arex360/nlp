const { AttachmentBuilder, EmbedBuilder } = require("discord.js")
const { getArtists } = require("../CRUD")
const BuildEmbed = require("../utility/BuildEmbed")

const Artist_Look = (message,buffer)=>{
    let prompt = "Hey! "+ `<@${message.author.id}> , Here are some artists \n \n `
    const myArists = getArtists() 
    if(myArists != false){
        console.log("found artists")
        myArists.forEach(arist=>{
            prompt +=arist
        })
        if(myArists.length == 0){
            prompt = "Hey! "+ `<@${message.author.id}> , I am sorry, there is no artist at the moment` 
        }
        const image = new AttachmentBuilder(buffer,{name:"image.png"})
    message.reply({prompt,files:[image],embeds: [BuildEmbed({prompt,title:"Looking for artists"})]}) 
    }else{
        console.log("artist not found")
        prompt = "Hey! "+ `<@${message.author.id}> , I am sorry, there is no artist at the moment`
        const image = new AttachmentBuilder(buffer,{name:"image.png"})
    message.reply({prompt,files:[image],embeds: [BuildEmbed({prompt,title:"Looking for artists"})]}) 
    }
}
module.exports = Artist_Look