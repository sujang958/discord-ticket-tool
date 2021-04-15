import ticket from './index.js';
import { Client } from 'discord.js';

const client = new Client();
client.ticket = new ticket();

client.on('ready', () => {
    console.log('ready');
});

client.on('message', async message => {
    if (message.content.startsWith("!set")) {
        client.ticket.setTicketChannel(message.guild.channels.cache.get('793308826635599874'), 'asdf', 'asdf');
    } else {
        
    }
});

client.ticket.on('create', channel => {
    console.log(channel);
});

client.login('NzQwMTAwMjEyNDMyODMwNDg1.XykGCQ.rS0nCNyJHDAPvYTe47HhB8sIBt0')