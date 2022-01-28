import { __decorate, __metadata } from "tslib";
import { Discord, On, Client } from "discordx";
let Patrick = class Patrick {
    krustyKrab([message], client) {
        if (!message.author.bot &&
            message.content.toLowerCase() == "is this the krusty krab?") {
            message.reply("No this is PATRICK!");
        }
    }
    pinHead([message], client) {
        if (!message.author.bot &&
            message.content.toLowerCase().includes("pinhead")) {
            message.reply("Who you callin' a pinghead?");
            message.channel.send({
                files: ["./src/assets/patrick_pinhead.png"]
            });
        }
    }
};
__decorate([
    On("messageCreate"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Client]),
    __metadata("design:returntype", void 0)
], Patrick.prototype, "krustyKrab", null);
__decorate([
    On("messageCreate"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Client]),
    __metadata("design:returntype", void 0)
], Patrick.prototype, "pinHead", null);
Patrick = __decorate([
    Discord()
], Patrick);
export { Patrick };
//# sourceMappingURL=fun_events.js.map