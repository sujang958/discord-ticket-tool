import { Client } from 'discord.js';
import Ticket from './src/index.js';

const client = new Client();
const ticket = new Ticket();

client.on('ready', () => {
    console.log('ready');
});

client.on('message', async message => {
    if (message.content.startsWith("!set")) {
        ticket.setTicketChannel(message.guild.channels.cache.get('793308826635599874'), {
            title: "asdf",
            description: "asdf",
            emoji: "❤"
        });
    } else {
        
    }
});

client.ticket.on('create', (channel, user) => {
    console.log(channel, user);
});

client.login('')