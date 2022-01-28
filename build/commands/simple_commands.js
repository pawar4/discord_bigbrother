import { __decorate, __metadata } from "tslib";
import { CommandInteraction } from "discord.js";
import { Discord, SimpleCommand, SimpleCommandMessage, Slash, } from "discordx";
let simpleCommands = class simpleCommands {
    hello(command) {
        command.message.reply("👋 sup ${command.message.member}");
    }
    pong(command) {
        command.reply("beer pong?");
    }
};
__decorate([
    SimpleCommand("hello", { aliases: ["hi", "hey", "sup"] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SimpleCommandMessage]),
    __metadata("design:returntype", void 0)
], simpleCommands.prototype, "hello", null);
__decorate([
    Slash("ping"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CommandInteraction]),
    __metadata("design:returntype", void 0)
], simpleCommands.prototype, "pong", null);
simpleCommands = __decorate([
    Discord()
], simpleCommands);
//# sourceMappingURL=simple_commands.js.map