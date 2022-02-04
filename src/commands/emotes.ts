import { AutocompleteInteraction, CommandInteraction } from "discord.js";
import {
    Discord,
    SimpleCommand,
    SimpleCommandMessage,
    Slash,
    SlashGroup,
    SlashOption
} from "discordx";
import fs from "fs";
import emotes from "./../assets/emotes.json";

@Discord()
@SlashGroup("emotes", "We're too poor for Nitro")
export abstract class Emotes {
    @Slash("send")
    sendEmote(
        @SlashOption("name", {
            autocomplete: (interaction: AutocompleteInteraction) => {
                var keys = Object.keys(emotes.gifs);
                var options = [];
                for (var key of keys) {
                    options.push({name: key, value: key})
                }

                interaction.respond(options);
            },
            type: "STRING"
        }) name: string, 
        command: CommandInteraction,
    ) {
        if (emotes.gifs.hasOwnProperty(name)) {
            let test = <keyof typeof emotes.gifs>name;
            command.reply(emotes.gifs[test] + ".gif");
        }
        else{
            command.reply(
                "I'm probably ruining the moment here but Idk that emote chief. "
                + "I made you look dumb but like my creater likes to say, it be like "
                + "that sometimes."
            );
        }
        
    }

    // @Slash("add")
    // addEmote(
    //     @SlashOption("name") name: string,
    //     @SlashOption("url") url: string,
    //     command: CommandInteraction,
    // ) {
        
    // }
}