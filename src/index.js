import Discord from "discord.js";
import { EventEmitter } from "events";

class Ticket {
    /**
     * Create discord ticket tool
     * @example client.ticket = new Ticket();
     */
    constructor() {
        const event = new EventEmitter();
        this.emit = event.emit;
        this.on = event.on;
        this.once = event.once;
        console.log("[Discord ticket] Initialize");
    }

    /**
     * set ticket channel
     * @param {Discord.GuildChannel} channel 
     * @param {String} title 
     * @param {String} description 
     */
    async setTicketChannel(channel, title, description, emoji="✉", color="GREEN") {
        if (!channel.isText()) {
            throw new Error("[Discord ticket] ticket channel can not be voice channel");
        } else {
            let embed = new Discord.MessageEmbed();
            embed.setTitle(title);
            embed.setDescription(description);
            embed.setColor(color);
            let ticketMsg = await channel.send(embed)
            ticketMsg.react(emoji);
            
            const ReactFilter = (reaction, user) => reaction.emoji.name == emoji;
            const collector = ticketMsg.createReactionCollector(ReactFilter);

            collector.on("collect", async r => {
                if (r.count == 1)   return;
                r.users.remove(r.users.cache.last().id);
                this.createTicketChannel(channel.guild, r.users.cache.last());
            });
        }
    }

    /**
     * create Ticket channel
     * @param {Discord.Guild} guild 
     * @param {Discord.User} user 
     */
    async createTicketChannel(guild, user) {
        if (!guild.channels.cache.find(gc => gc.name == `ticket-${user.id}`)) {
            let ticketChannel = await guild.channels.create(`ticket-${user.id}`, {
                type: "text",
                permissionOverwrites: [
                    {
                      id: guild.roles.everyone.id,
                      deny: ["VIEW_CHANNEL"],
                    },
                    {
                        id: user.id,
                        allow: ["VIEW_CHANNEL"],
                    }
                 ],
            });
            ticketChannel.send(`<@!${user.id}>`);
            let ticketMsg = await ticketChannel.send(new Discord.MessageEmbed().setColor("RED").setAuthor("Ticket started").setDescription("React the emoji to close the ticket"))
            ticketMsg.react(`❌`);

            this.emit("create", ticketChannel, user);

            const ReactFilter = (reaction, user) => reaction.emoji.name == "❌";
            const collector = ticketMsg.createReactionCollector(ReactFilter);

            collector.on("collect", async r => {
                if (r.count == 1)   return;
                r.users.remove(r.users.cache.last().id);
                this.closeTicket(r.message.channel);
            });
        }  
    }

    /**
     * close Ticket
     * @type {VoidFunction}
     * @param {Discord.GuildChannel} channel 
     */
    async closeTicket(channel) {
        channel.delete("ticket closed");
        this.emit("close");
    }
}

export default Ticket;