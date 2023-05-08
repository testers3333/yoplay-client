/* IMPORTATION */
import { config } from "dotenv";
config();
import { Client } from "discord.js";
import { defaultIntents } from "./utils/defaultClientConfig";
import database from "quick.db";

/* CLASSE BOT */
export default class Bot extends Client {
    /* CONFIGURATION PAR DEFAUT */

    constructor() {
        super({
            intents: defaultIntents,
            partials: [
                "CHANNEL",
                "GUILD_MEMBER",
                "MESSAGE",
                "REACTION",
                "USER"
            ]
        })

        
    }

    async loadEvents() {
        
    }
}
