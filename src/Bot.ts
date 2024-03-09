import { ClientOptions, GatewayIntentBits } from "discord.js";
import StudyBotClient from "./classes/Client";

import * as dotenv from "dotenv";
dotenv.config();

(async () => {
    const options: ClientOptions = {
        intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent],
    };
    const BOT = new StudyBotClient(options);
    BOT.logger.info("Successfully Created Client");

    await BOT.login_bot(process.env.TOKEN);
})();
