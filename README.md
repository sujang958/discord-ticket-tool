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
client.ticket.setTicketChannel(discordjs guild, "Embed Title", "Description", "emoji(optional)", "color(optional)");
// ...
client.ticket.on("create", () => {
    console.log("Ticket Created!");
});
```