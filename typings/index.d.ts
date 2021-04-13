declare module 'discord-ticket-tool' {
    import Discord from 'discord.js';
    import { EventEmitter } from "events";

    export default Ticket;
    declare class Ticket {
        public emit: (event: string | symbol, ...args: any[]) => boolean;
        public on: (event: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
        public once: (event: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
        public setTicketChannel(channel: Discord.GuildChannel, title: string, description: string, emoji?: string, color?: string): Promise<void>;
        public createTicketChannel(guild: Discord.Guild, user: Discord.User): Promise<void>;
        public closeTicket(channel: Discord.GuildChannel): void;
    }
}