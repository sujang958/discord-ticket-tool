# discord-ticket-tool
## A simple discord ticket bot tool
## Install
### NPM
```
$ npm install discord-ticket-tool
```
### Yarn
```
$ yarn add discord-ticket-tool
```
## Example
```js
const Ticket = require("discord-ticket-tool").default;
client.ticket = new Ticket();
// ...
ticket.setTicketChannel(message.guild.channels.cache.get('793308826635599874'), {
    title: "asdf",
    description: "asdf",
    emoji: "❤(option)",
    color: "GREEN(option)",
});
// ...
client.ticket.on("create", (channel, user) => {
    console.log("Ticket Created!");
});
```