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

let jsonfile = fs.readFileSync('./src/assets/emotes.json', "utf8");
let emotes = JSON.parse(jsonfile);

// let rule = new schedule.RecurrenceRule();
// rule.dayOfWeek = [0, new schedule.Range(0, 6)];
// rule.hour = 18;
// rule.minute = 0;
// schedule.scheduleJob(rule, async function () {
//     fs.writeFileSync('./src/assets/emotes.json', JSON.stringify(emotes));
// })

@Discord()
// @SlashGroup("emotes", "We're too poor for Nitro")
export abstract class Emotes {
    @Slash("emote")
    sendEmote(
        @SlashChoice(emotes.gifs)
        @SlashOption("name") name: string,
        interaction: CommandInteraction,
    ) {
        interaction.reply(name + ".gif");        
    }

    // @Slash("add_emote")
    // addEmote(
    //     @SlashOption("name",) name: string,
    //     @SlashOption("url") url: string,
    //     interaction: CommandInteraction,
    // ) {
    //     emotes.gifs[name] = url;
    //     console.log(emotes);
    //     interaction.reply("Done :)");
    // }
}