import { CommandInteraction } from "discord.js";
import {
    Discord,
    SimpleCommand,
    SimpleCommandMessage,
    Slash,
    SlashGroup,
    SlashOption,
    SlashChoice,
} from "discordx";
import fs from "fs";
import * as schedule from "node-schedule";
import emotes from './../assets/emotes.json';

// let jsonfile = fs.readFileSync('./src/assets/emotes.json', "utf8");
// let emotes = JSON.parse(jsonfile);

@Discord()
export abstract class Emotes {
    @Slash("emote")
    sendEmote(
        @SlashChoice(emotes.gifs)
        @SlashOption("name") name: string,
        interaction: CommandInteraction,
    ) {
        interaction.reply(name + ".gif");        
    }
}