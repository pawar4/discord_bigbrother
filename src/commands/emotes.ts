import { CommandInteraction } from "discord.js";
import {
    Discord,
    SimpleCommand,
    SimpleCommandMessage,
    Slash,
    SlashOption
} from "discordx";
import fs from "fs";
import { TenorAPI, } from "./../api/tenor_api.js";

@Discord()
class Emotes {
    @Slash("emote")
    sendEmote(
        @SlashOption("name") name: string, 
        command: CommandInteraction,
    ) {
        if (fs.existsSync("./src/assets/emotes/" + name + ".gif"))
        {
            command.reply({files: ["./src/assets/emotes/" + name + ".gif"]});
        }
        else{
            command.reply("I dont know that meme");
        }
        
    }

    @Slash("add_emote")
    addEmote(
        @SlashOption("name") name: string,
        @SlashOption("url") url: string,
        command: CommandInteraction,
    ) {

    }
}