const { Message } = require("discord.js")

module.exports = {
    name: 'jesper',
    description: "this is a jesper command!",
    execute(message, args) {

        if(message.member.roles.cache.has('779658591569182732')){
        message.channel.send('du är en skitkorv!')


        } else {
            message.channel.send('Du hast dazu noch keine Berechtigung, lass mich dir helfen :)');
            message.member.roles.add('779658591569182732').catch(console.error);
        }




    }



}