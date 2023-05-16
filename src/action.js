const { Client, GatewayIntentBits,AttachmentBuilder ,EmbedBuilder} = require('discord.js');
const { insertDeveloper, getDesigners, getDevelopers, insertDesigner ,artists,designers,developers,getArtists,insertArtist} = require('./CRUD');
const BuildEmbed = ({title,prompt})=>{
    const exampleEmbed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle(title)
  .setURL('https://discord.js.org/')
  .setAuthor({ name: 'AI MatchMaker', iconURL: 'https://imgur.com/Wz14mCj.png', url: 'https://discord.js.org' })
  .setDescription(prompt)
  .setThumbnail('https://imgur.com/Wz14mCj.png')
  .setImage('https://imgur.com/XAFrUZM.gif')
  .setTimestamp()
  .setFooter({ text: 'If found any wrong result, please report to Arex', iconURL: 'https://imgur.com/Wz14mCj.png' });
  return exampleEmbed
}

const actions = {
    "designer.look|developer.role": (message,buffer)=> {
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
        message.reply({prompt,files:[image]})
        }else{
            prompt = "Hey! "+ `<@${message.author.id}> Glad to know you are developer (added to you developers list), I am sorry, there is no designer at the moment` 
            const image = new AttachmentBuilder(buffer,{name:"image.png"})
        message.reply({prompt,files:[image]})
        }
    },
    "designer.look": (message,buffer)=> {
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
        message.reply({prompt,files:[image]})
        }else{
            console.log("designer not found")
            prompt = "Hey! "+ `<@${message.author.id}> , I am sorry, there is no designer at the moment`
            const image = new AttachmentBuilder(buffer,{name:"image.png"})
        message.reply({prompt,files:[image]})
        }
    },
    'designer.role': (message,buffer)=>{
        let prompt = "Hey! "+ `<@${message.author.id}> Nice to know you are a designer, will notify you if someone need a game designer`
        insertDesigner(` <@${message.author.id}>  `)
        const image = new AttachmentBuilder(buffer,{name:"image.png"})
        message.reply({prompt,files:[image]})
    },
    'developer.look': (message,buffer)=>{
        let prompt = ""
        let developers = getDevelopers()
        if(developers != false){
            developers.forEach(developer=>{
                prompt += developer + '\n \n'
            })
            const image = new AttachmentBuilder(buffer,{name:"image.png"})
        message.reply({prompt,files:[image],embeds: [BuildEmbed({prompt,title:"Here are following developers"})]})
        }
    },
    'developer.role': (message,buffer)=>{
        let prompt = "Hey! "+ `<@${message.author.id}> Nice to know you are a developer, will notify you if someone need a game developer`
        insertDeveloper(` <@${message.author.id}>  `)
        const image = new AttachmentBuilder(buffer,{name:"image.png"})
        message.reply({prompt,files:[image]})
    },
    'artist.look': (message,buffer)=>{
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
        message.reply({prompt,files:[image]})
        }else{
            console.log("artist not found")
            prompt = "Hey! "+ `<@${message.author.id}> , I am sorry, there is no artist at the moment`
            const image = new AttachmentBuilder(buffer,{name:"image.png"})
        message.reply({prompt,files:[image]})
        }
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