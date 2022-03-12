const Discord = require("discord.js") // discord library v12.5.3
const config = require("./config.json") // config file
const bot = new Discord.Client() // bot declaration
const fs = require('fs'); // for if i decide to use it
const { verify } = require("crypto"); // what the fuck is this


bot.on("ready", async () => {
    console.log('on') // self explanitory
})

const guild = bot.guilds.cache.get("952010026061557783") // the server

bot.on("message", async message => {
    let prefix = config.prefix; // prefix
    let messageArray = message.content.split(' ') // something that i learned a long time ago, idfk what it does
    let cmd = messageArray[0] // command thingy
    let args = messageArray.slice(1) // argument thingy

    if(cmd === `${prefix}say`){
        let saymessage = message.content
        message.channel.send(saymessage.replace("&say","")) // remove prefix
        message.delete() // delete command message
    }

    if(cmd === `${prefix}verify`) {
       
 let role = message.guild.roles.cache.get("952013157969330316"); // members


let member = message.mentions.members.first(); // gets first pinged member

if(message.member.roles.cache.has("952011804131872839")){ // owners
member.roles.add(role);
} else {
    return message.reply("You do not have the required permissions.") // permission rejection
}

if(message.member.roles.cache.has("952027068818944050")){ // admins
  member.roles.add(role);
} else {
    return message.reply("You do not have the required permissions.") // permission rejection
}



    }
})

bot.login(config.token); // bot login
