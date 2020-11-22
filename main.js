const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandfiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandfiles){
    const command = require(`./commands/${file}`);
    
    client.commands.set(command.name, command);
}


client.once('ready' , () => {
    console.log('WALLE-E ist jetzt online')
});

('Das ist der Nachrichten-Code')
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }     else if (command == 'youtube'){
           client.commands.get('youtube').execute(message, args)       
    }     else if (command == 'jesper'){
           client.commands.get('jesper').execute(message, args)
    }
         else if (command == 'canikick?'){
           client.commands.get('canikick').execute(message, args)
 }

});
('Das hier ist der Log-Code')
client.on('messageUpdate',async(oldMessage,newMessage)=>{
    require('./guild/messageUpdate.js')(oldMessage,newMessage)
})
client.on('messageDelete',async(message)=>{
    require('./guild/messageDelete.js')(message)
})











client.login(process.env.TOKEN);