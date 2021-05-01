declare module 'discord-ticket-tool' {
    import Discord from 'discord.js';

    declare class Ticket {
        emit(event: string | symbol, ...args: any[]): boolean;

        on(event: string | symbol, listener: (...args: any[]) => void): void;
        on(event: 'close', listener: () => void): void;
        on(event: 'create', listener: (channel: Discord.GuildChannel, user: Discord.User) => any): void;

        once(event: string | symbol, listener: (...args: any[]) => void): void;
        once(event: 'close', listener: () => void): void;
        once(event: 'create', listener: (channel: Discord.GuildChannel, user: Discord.User) => void): void;

        setTicketChannel(channel: Discord.GuildChannel, embedOpt: embedOpt): Promise<void>;
        createTicketChannel(guild: Discord.Guild, user: Discord.User): Promise<void>;
        closeTicket(channel: Discord.GuildChannel): void;
    }

    export = Ticket;
}