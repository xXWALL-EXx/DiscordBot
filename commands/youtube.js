const { Message } = require("discord.js")

module.exports = {
    name: 'youtube',
    description: "this is a youtube command!",
    execute(message, args){
        message.channel.send('https://Youtube.com/JAKOBGaming');
    }



}