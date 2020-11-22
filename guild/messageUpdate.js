const {MessageEmbed} = require("discord.js")
module.exports=async(oldMessage,newMessage)=>{
    let embed = new MessageEmbed()
    .setTitle(`Neue Nachricht bearbeitet!`)
    .setColor(`GREEN`)
    .setDescription(`**Der Nutzer @${oldMessage.author.tag} hat eine Nachricht in <#${oldMessage.channel.id}> bearbeitet!**`)
    .addField(`Alter Inhalt:`,oldMessage.content,true)
    .addField(`Neuer Inhalt:`,newMessage.content,true)
    let channel = oldMessage.guild.channels.cache.find(ch=>ch.name==="bot-log")
    if(!channel)return;
    channel.send(embed)
}