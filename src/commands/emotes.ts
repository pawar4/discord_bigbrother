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

@Discord()
@SlashGroup("emotes", "We're too poor for Nitro")
export abstract class Emotes {
    @Slash("send")
    sendEmote(
        @SlashOption("name", {
            autocomplete: (interaction: AutocompleteInteraction) => {
                interaction.respond([
                    {name: "option e", value: "e"},
                    {name: "option f", value: "f"},
                ]);
            },
            type: "STRING",
        }) name: string, 
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

    // @Slash("add")
    // addEmote(
    //     @SlashOption("name") name: string,
    //     @SlashOption("url") url: string,
    //     command: CommandInteraction,
    // ) {
        
    // }
}