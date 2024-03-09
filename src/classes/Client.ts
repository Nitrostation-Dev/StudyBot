import { Client, ClientOptions, GatewayIntentBits } from "discord.js";
import Logger from "../utils/Logger";

export default class StudyBotClient extends Client {
    logger;

    constructor(options: ClientOptions) {
        super(options);

        this.logger = Logger;
        this.logger.info("SUP");
    }
};