const token = "MTEwMDUwOTI4Mzk0MDA0MDc1Ng.GTQRQv.AUouFmwq3DL4YexYEHP5_HCQlehsbd7vlEhpyA"; //Token that you saved in step 5 of this tutorial
const { Client, GatewayIntentBits } = require('discord.js');
const { Predict } = require('./NLP');
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,] });
const developers = []
const artists = []
const designers = []
const actions = {
    "designer.look|developer.role": (message)=> {
        let prompt = "Hey! "+ `<@${message.author.id}> Glad to know you are developer (added to you developers list), Here are designers`
        console.log(designers)
        designers.forEach(designer=>{
            prompt +=designer
        })
        if(designers.length == 0){
            prompt = "Hey! "+ `<@${message.author.id}> Glad to know you are developer (added to you developers list), I am sorry, there is no designer at the moment` 
        }
        developers.push(` <@${message.author.id}> `)
        console.log(developers)
        message.reply(prompt)
    },
    "designer.look": (message)=> {
        let prompt = "Hey! "+ `<@${message.author.id}>`
        console.log(designers)
        designers.forEach(designer=>{
            prompt +=designer
        })
        if(designers.length == 0){
            prompt = "Hey! "+ `<@${message.author.id}> , I am sorry, there is no designer at the moment` 
        }
        console.log(developers)
        message.reply(prompt)
    },
    'developer.look': (message)=>{
        let prompt = "Hey! "+ `<@${message.author.id}> Here are some developers`
        console.log(developers)
        developers.forEach(developer=>{
            prompt += developer
        })
        message.reply(prompt)
    },
    'designer.role': (message)=>{
        let prompt = "Hey! "+ `<@${message.author.id}> Nice to know you are a designer, will notify you if someone need a game designer`
        designers.push(` <@${message.author.id}>  `)
        message.reply(prompt)
    }

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