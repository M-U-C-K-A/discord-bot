import {Client, Events, GatewayIntentBits} from 'discord.js';
import {config} from 'dotenv';

config();

console.log(process.env.SERVERID);
const client = new Client({
    intents: [GatewayIntentBits.Guilds],
})