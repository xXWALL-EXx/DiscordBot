const { Message } = require("discord.js")

module.exports = {
    name: 'canikick',
    description: "Dieses Kommando zeigt ob man Mitglieder kicken kann oder nicht.",
    
    execute(message, args){

        if(message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send('Du hast die Berechtigung Mitglieder zu kicken!');
        }
        else{
         message.channel.send('Du hast KEINE Berechtigung Mitglieder zu kicken!');
        }
    }



}