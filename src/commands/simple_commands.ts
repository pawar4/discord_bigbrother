import { CommandInteraction, Message, MessagePayload } from "discord.js";
import {
    Discord,
    SimpleCommand,
    SimpleCommandMessage,
    Slash,
    ApplicationCommandParams,
    SlashOption
} from "discordx";
import { urlToHttpOptions } from "url";
import { TenorAPI, } from "./../api/tenor_api.js";

@Discord()
class simpleCommands {

    @SimpleCommand("hello", {aliases: ["hi", "hey", "sup"]})
    hello(command: SimpleCommandMessage) {
        command.message.reply("👋 sup ${command.message.member}");
    }

    @Slash("ping")
    pong(command: CommandInteraction)
    {
        command.reply("beer pong?");
    }

    @Slash("gif")
    async messageReplace(
        @SlashOption("term") term: string, 
        interaction: CommandInteraction,
    ) {
        let tenorAPI = new TenorAPI();
        var url = await tenorAPI.grab_data(term);
        if (url == "n/a") {
            interaction.reply("I got no GIFs for that man");
            return;
        }
        interaction.reply(url);
    }
}