import "reflect-metadata";
import { Intents, Interaction, Message } from "discord.js";
import { Client, Guild } from "discordx";
import { dirname, importx } from "@discordx/importer";

import { fileURLToPath } from 'url';

const __dirname = dirname(import.meta.url);

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/../.env' });

export const client = new Client({
    simpleCommand: {
        prefix: "!",
    },
    botId: "bot",
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
    // botGuilds: ["905329676791214092"]
});

client.once("ready", async () => {
    await client.guilds.fetch();

    await client.initApplicationCommands({
        guild: { log: true },
        global: { log: true },
    });

    await client.initApplicationPermissions(true);

    console.log("Bot started");
});

client.on("interactionCreate", (interaction: Interaction) => {
    client.executeInteraction(interaction);
});

client.on("messageCreate", (message: Message) => {
    client.executeCommand(message);
});

async function run() {

    await importx(
        __dirname + "/{events,commands,api}/**/*.{ts,js}"
      );

    
    if (!process.env.botToken) {
        throw Error("No Discord bot token was found in your environment");
    }
    await client.login(process.env.botToken)
}

run();
