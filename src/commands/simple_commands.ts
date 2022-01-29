import { CommandInteraction } from "discord.js";
import {
    Discord,
    SimpleCommand,
    SimpleCommandMessage,
    Slash,
    SlashOption
} from "discordx";

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
}