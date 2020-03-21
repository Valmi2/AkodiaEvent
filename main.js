const { Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') msg.channel.send('Pong!');
});

client.login('NjkwODY2MzA5NTI0NjE5MzM0.XnX-Hw.uqFZPXfo9LumJ_Q-vEqhxSoYsqc');