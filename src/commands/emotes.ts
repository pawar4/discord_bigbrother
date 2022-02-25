import { AutocompleteInteraction, CommandInteraction } from "discord.js";
import {
    Discord,
    Slash,
    SlashOption,
    SlashChoice,
} from "discordx";
import fs from "fs";
import * as schedule from "node-schedule";

let jsonfile = fs.readFileSync('./src/assets/emotes.json', "utf8");
let emotes = JSON.parse(jsonfile);

let rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(0, 6)];
rule.hour = 18;
rule.minute = 0;
schedule.scheduleJob(rule, async function () {
    console.log("Updating emotes json")
    fs.writeFileSync('./src/assets/emotes.json', JSON.stringify(emotes));
})

@Discord()
export abstract class Emotes {
    @Slash("emote")
    sendEmote(
        @SlashOption("name", {
            autocomplete: (interaction: AutocompleteInteraction) => {
                const focusedOption = interaction.options.getFocused(true)
                let filteredList = new Array();
                for (var k of Object.keys(emotes.gifs)) {
                    let res = String(focusedOption.value);
                    if (k.toLowerCase().includes(res.toLowerCase())) {
                        filteredList.push({name: k, value: emotes.gifs[k]});
                    }
                }
                interaction.respond(filteredList);
            }, 
            type: "STRING"
        }) name: string,
        interaction: CommandInteraction,
    ) {
        if (!Object.values(emotes.gifs).includes(name)) {
             interaction.reply(`Don't know that one chief. Trying adding it first`);
             return;
        }
        interaction.reply(name + '.gif');
    }
    
    @Slash("add_emote")
    add_emote(
        @SlashOption("name") name: string,
        @SlashOption("url") url: string,
        interaction: CommandInteraction
    ) {
        if (Object.keys(emotes.gifs).length >= 25) {
            interaction.reply(`Currently at emote capacity. Remove an existing emote before adding a new one.`);
            return;
        }
        
        emotes.gifs[name] = url;
        interaction.reply(`Successfully added emote`);
    }

    @Slash("remove_emote")
    remove_emote(
        @SlashOption("name") name: string,
        interaction: CommandInteraction,
    ) {
        if (Object.keys(emotes.gifs).includes(name)) {
            delete emotes.gifs[name];
            interaction.reply(`Successfully removed emote`);
        } else {
            interaction.reply(`Can't find that emote to remove.`);
        }
    }
}