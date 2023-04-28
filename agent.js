const token = "MTEwMDUwOTI4Mzk0MDA0MDc1Ng.GTQRQv.AUouFmwq3DL4YexYEHP5_HCQlehsbd7vlEhpyA"; //Token that you saved in step 5 of this tutorial
const { Client, GatewayIntentBits } = require('discord.js');
const { Predict } = require('./NLP');
const { insertDeveloper, getDesigners, getDevelopers, insertDesigner ,artists,designers,developers,getArtists,insertArtist} = require('./CRUD');
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,] });

const actions = {
    "designer.look|developer.role": (message)=> {
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
            message.reply(prompt)
        }else{
            prompt = "Hey! "+ `<@${message.author.id}> Glad to know you are developer (added to you developers list), I am sorry, there is no designer at the moment` 
            message.reply(prompt)
        }
    },
    "designer.look": (message)=> {
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
            message.reply(prompt)
        }else{
            console.log("designer not found")
            prompt = "Hey! "+ `<@${message.author.id}> , I am sorry, there is no designer at the moment`
            message.reply(prompt)
        }
    },
    'developer.look': (message)=>{
        let prompt = "Hey! "+ `<@${message.author.id}> Here are some developers \n \n`
        let developers = getDevelopers()
        if(developers != false){
            developers.forEach(developer=>{
                prompt += developer
            })
            message.reply(prompt)
        }
    },
    'designer.role': (message)=>{
        let prompt = "Hey! "+ `<@${message.author.id}> Nice to know you are a designer, will notify you if someone need a game designer`
        insertDesigner(` <@${message.author.id}>  `)
        message.reply(prompt)
    },
    'developer.role': (message)=>{
        let prompt = "Hey! "+ `<@${message.author.id}> Nice to know you are a developer, will notify you if someone need a game developer`
        insertDeveloper(` <@${message.author.id}>  `)
        message.reply(prompt)
    },
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("messageCreate", async (message) => {
  console.log(message)
if (message.content.startsWith("!mlab")) {
    const intent = await Predict(message.content)
    console.log(intent)
    actions[intent](message)
} 
});
client.login(token);