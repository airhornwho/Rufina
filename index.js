require('dotenv/config');
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', () => {
    console.log('Rufina is turned on');
})

client.on('messageCreate', (message) => {
    console.log(message.content);
})

client.login(process.env.CLIENT_TOKEN);