const {MessageEmbed} = require("discord.js")
module.exports=async(message)=>{
    let embed = new MessageEmbed()
    .setTitle('Neue Nachricht gelöscht!')
    .setDescription(`**Der Nutzer @${message.author.tag} hat eine Nachricht in <#${message.channel.id}> gelöscht!**`)
    .addField(`Inhalt:`,message.content,true)
    .setTimestamp()
    .setColor(`RED`)
    let channel = message.guild.channels.cache.find(ch=>ch.name==="bot-log")
    if(!channel)return;
    channel.send(embed)





}