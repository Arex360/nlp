const { AttachmentBuilder, embedLength } = require("discord.js")
const { insertDesigner, insertArtist } = require("../CRUD")
const BuildEmbed = require("../utility/BuildEmbed")

const ArtistRole =  (message,buffer)=>{
    let prompt = "Hey! "+ `<@${message.author.id}> Nice to know you are a Artist, will notify you if someone need a game designer`
    insertArtist(` <@${message.author.id}>  `) 
    const image = new AttachmentBuilder(buffer,{name:"image.png"})
    message.reply({prompt,files:[image],embeds: [BuildEmbed({prompt,title:"Good luck"})]}) 
}
module.exports = ArtistRole