"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const Logger_1 = __importDefault(require("../utils/Logger"));
class StudyBotClient extends discord_js_1.Client {
    constructor(options) {
        super(options);
        this.logger = Logger_1.default;
        this.logger.info("SUP");
    }
}
exports.default = StudyBotClient;
;
