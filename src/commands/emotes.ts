import { AutocompleteInteraction, CommandInteraction } from "discord.js";
import {
    Discord,
    SimpleCommand,
    SimpleCommandMessage,
    Slash,
    SlashGroup,
    SlashOption,
    SlashChoice,
} from "discordx";
import emotes from "./../assets/emotes.json";

@Discord()
// @SlashGroup("emotes", "We're too poor for Nitro")
export abstract class Emotes {
    @Slash("emote")
    sendEmote(
        @SlashChoice(emotes.gifs)
        @SlashOption("name",)
        name: string,
        interaction: CommandInteraction,
    ) {
        interaction.reply(name + ".gif");        
    }
}