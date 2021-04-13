import ticket from './src/index.js';
import { Client } from 'discord.js';

const client = new Client();
client.ticket = new ticket();

client.on('ready', () => {
    console.log('ready');
});

client.on('message', async message => {
    if (message.content.startsWith("!set")) {
        client.ticket.setTicketChannel(message.guild.channels.cache.get('793308826635599874'), 'asdf', 'asdf');
    }
});

client.login()