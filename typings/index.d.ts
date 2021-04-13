declare module 'discord-ticket-tool' {
    import Discord from 'discord.js';

    export type TicketEvents = 'create' | 'close';

    export class Ticket {
        public setTicketChannel(channel: Discord.GuildChannel, title: string, description: string): void;
        public createTicketChannel(guild: Discord.Guild, user: Discord.User): void;
        public closeTicket(channel: Discord.GuildChannel): void;
    }
}