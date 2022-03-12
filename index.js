const Discord = require("discord.js")
const config = require("./config.json")
const bot = new Discord.Client()
const fs = require('fs');
const { verify } = require("crypto");


bot.on("ready", async () => {
    console.log('on')
})

const guild = bot.guilds.cache.get("952010026061557783")
//var memberCount = guild.members.cache.filter(member => !member.user.bot).size;

//bot.user.setActivity(`over ${memberCount} LGBTQties!~`)
 //   bot.user.setStatus(`dnd`);


bot.on("message", async message => {
    let prefix = config.prefix;
    let messageArray = message.content.split(' ')
    let cmd = messageArray[0]
    let args = messageArray.slice(1)

    if(cmd === `${prefix}say`){
        let saymessage = message.content
        message.channel.send(saymessage.replace("&say",""))
        message.delete()
    }

    if(cmd === `${prefix}verify`) {
       
 let role = message.guild.roles.cache.get("952013157969330316");


let member = message.mentions.members.first();

if(message.member.hasPermission("ADMINISTRATOR")){
member.roles.add(role);
}

if(!message.member.hasPermission("ADMINISTRATOR")){
    return message.reply("You do not have the proper permissions.")
}
    


    }
})

bot.login(config.token);
