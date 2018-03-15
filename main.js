const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is online');
});

bot.on('message', message => {
    if(message.content === '!ping')
    {
        message.reply('pong!');
    }
})


bot.on('guildMemberAdd', member => {
    member.guild.channels.get('417012868743954434').send('Benvenuto su Crypto Trading Italia, Ti auguriamo tanto successo! :wink:'+ member.user.username); 
});




bot.login('NDIzMTcxNTYwMTgzMTY5MDI0.DYqLZg.s3vwh54dA4G7pi799hPaii7zwd4');
