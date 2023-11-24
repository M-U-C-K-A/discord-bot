import {Client, Events, GatewayIntentBits} from 'discord.js';
import {config} from 'dotenv';

config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
})



function readyDiscord() {
    console.log('ready to connect :' + client.user.tag);
}

client.once(Events.ClientReady,readyDiscord);

client.login(process.env.TOKEN);
