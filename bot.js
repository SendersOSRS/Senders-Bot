const Discord = require('discord.js')
require('dotenv').config()
const TOKEN = 'OTczNjY0NjE1MzgyNzc3ODc4.Gvkh9b.nS00zwXH-Pb_0tEhJ9DBUW6aD_0QsKG5EDY6zM'

const client = new Discord.Client({
intents: [
'GUILDS',
'GUILD_MESSAGES'
]

}) 

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('messageCreate', (message) => {
    if (message.content == 'nigga'){
        message.reply('**Warning:** I will beat your ass!')
    }
})

client.login(process.env.TOKEN)