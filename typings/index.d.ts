export declare module 'discord-ticket-tool' {
    import Discord from 'discord.js';
    import { EventEmitter } from "events";

    declare class Ticket {
        public emit: (event: string | symbol, ...args: any[]) => boolean;
        public on: (event: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
        public once: (event: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
        public setTicketChannel(channel: Discord.GuildChannel, title: string, description: string, emoji?: string, color?: Discord.ColorResolvable): Promise<void>;
        public createTicketChannel(guild: Discord.Guild, user: Discord.User): Promise<void>;
        public closeTicket(channel: Discord.GuildChannel): void;
    }
    export default Ticket;
}

export type Colors =
    | 'DEFAULT'
    | 'WHITE'
    | 'AQUA'
    | 'GREEN'
    | 'BLUE'
    | 'YELLOW'
    | 'PURPLE'
    | 'LUMINOUS_VIVID_PINK'
    | 'GOLD'
    | 'ORANGE'
    | 'RED'
    | 'GREY'
    | 'DARKER_GREY'
    | 'NAVY'
    | 'DARK_AQUA'
    | 'DARK_GREEN'
    | 'DARK_BLUE'
    | 'DARK_PURPLE'
    | 'DARK_VIVID_PINK'
    | 'DARK_GOLD'
    | 'DARK_ORANGE'
    | 'DARK_RED'
    | 'DARK_GREY'
    | 'LIGHT_GREY'
    | 'DARK_NAVY'
    | 'BLURPLE'
    | 'GREYPLE'
    | 'DARK_BUT_NOT_BLACK'
    | 'NOT_QUITE_BLACK'
    | 'RANDOM'
    | [number, number, number]
    | number
    | string;