import { Discord, On, Client, ArgsOf } from "discordx";

@Discord()
export abstract class FunEvents {
    @On("messageCreate")
    krustyKrab([message]: ArgsOf<"messageCreate">, client: Client)
    {
        if (!message.author.bot && 
            message.content.toLowerCase() == "is this the krusty krab?") {
            message.reply("No this is PATRICK!");
        }
        
    }
    
    @On("messageCreate")
    pinHead([message]: ArgsOf<"messageCreate">, client: Client)
    {
        if (!message.author.bot && 
            message.content.toLowerCase().includes("pinhead")) {
            message.reply("Who you callin' pinhead?");
            message.channel.send({
                files: ["./src/assets/patrick_pinhead.png"]
            },);
        }
        
    }
}