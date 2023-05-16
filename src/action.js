const { Client, GatewayIntentBits,AttachmentBuilder ,EmbedBuilder} = require('discord.js');
const { insertDeveloper, getDesigners, getDevelopers, insertDesigner ,artists,designers,developers,getArtists,insertArtist} = require('./CRUD');
const Developer_Look = require('./intents/Developer_Look');
const Designer_Look_Developer_Role = require('./intents/Designer_Look_Developer_Role');
const Designer_Look = require('./intents/Designer_look');
const DesignerRole = require('./intents/Designer_Role');
const Developer_Role = require('./intents/Developer_Role');
const Artist_Look = require('./intents/Artist_Look');


const actions = {
    "designer.look|developer.role": (message,buffer)=> {
       Designer_Look_Developer_Role(message,buffer)
    },
    "designer.look": (message,buffer)=> {
        Designer_Look(message,buffer)
    },
    'designer.role': (message,buffer)=>{
        DesignerRole(message,buffer)
    },
    'developer.look': (message,buffer)=>{
        Developer_Look(message,buffer)
    },
    'developer.role': (message,buffer)=>{
        Developer_Role(message,buffer)
    },
    'artist.look': (message,buffer)=>{
       Artist_Look(message,buffer)
    },
    'artist.role': (message,buffer)=>{
        let prompt = "Hey! "+ `<@${message.author.id}> Nice to know you are a artist, will notify you if someone need a game artist`
        insertArtist(` <@${message.author.id}>  `)
        const image = new AttachmentBuilder(buffer,{name:"image.png"})
        message.reply({prompt,files:[image]})
       // message.reply(prompt)
    }
}
module.exports = actions