import { AutocompleteInteraction, CommandInteraction } from "discord.js";
import {
    Discord,
    SimpleCommand,
    SimpleCommandMessage,
    Slash,
    SlashGroup,
    SlashOption
} from "discordx";
import * as ytdl from "ytdl-core";
import * as ytSearch from "yt-search";

@Discord()
@SlashGroup("music", "SMH youtube for doing that to rhythm")
export abstract class Music {
    @Slash("play")
    playMusic(
        @SlashOption("link") link: string,
        command: CommandInteraction,
    ) {
        // var voice_channel = command.user.;
    }
}