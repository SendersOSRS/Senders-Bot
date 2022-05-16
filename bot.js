const Discord = require('discord.js')
require('dotenv').config()


const generateImage = require('./generateImage')

const TOKEN = 'OTczNjY0NjE1MzgyNzc3ODc4.Gvkh9b.nS00zwXH-Pb_0tEhJ9DBUW6aD_0QsKG5EDY6zM'

const client = new Discord.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_MEMBERS',
    ]
})

const prefix = '-';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args=message.content.slice(prefix.length).split(/ +/);
    const command=args.shift().toLowerCase();

  if (command === 'scythe'){
        message.channel.send('https://www.sythe.org/threads/tob-cox-ca-gauntlet-plus-more-cheap-prices-best-service/');
     }
    else if (command === 'trustpilot') {
        message.channel.send('https://uk.trustpilot.com/review/senders.netlify.app')
    }
    else if (command === 'website') {
        message.channel.send('https://senders.netlify.app/')
    }
    else if (command === 'Tobreq') {
        message.channel.send("")
    }
    
});

//delete bad words

client.on("message", async message => {

    let blacklisted = ['nigga', 'Nigga', 'Nigger', 'n1gga'];
  
  let foundInText = false;
  for (var i in blacklisted) {
    if(message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }
  
  if(foundInText) {
    message.delete();
    message.channel.send("Stop using this bad word!")
  }
  });

client.on('messageCreate', (message) => {
    if (message.content == 'ruenlite') {
        message.reply('**Ruenlite:** I am at school right now, please try contact me after school hours!')
    }
})

client.on('messageCreate', (message) => {
    if (message.content == 'weedsmoker') {
        message.reply('**Weedsmoker:** I will be back in 2 hours, my dog ran out the back gate')
    }
})

client.on('messageCreate', (message) => {
    if (message.content == 'menace') {
        message.reply('**Menace:** I am smoking out my window, be with you shortly')
    }
})

client.on('messageCreate', (message) => {
    if (message.content == 'korasi') {
        message.reply('**Korasi:** Direct message me if it is urgent')
    }
})

client.on('messageCreate', (message) => {
    if (message.content == 'korasi') {
        message.reply('**Korasi:** Direct message me if it is urgent')
    }
})



const welcomeChannelid = '957395838194290708'

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.chache.get(welcomeChannelid).send({
        content: `<@${member.id}> Welcome to Senders!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)