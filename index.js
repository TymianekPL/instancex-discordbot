const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
require("dotenv").config();
const token = process.env.TOKEN;
const fs = require("fs");
const global = require("./modules/global");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildMessages] });

global.add("client", client);

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

    for (const command of fs.readdirSync("./commands").filter(file => file.endsWith(".js") && file != "index.js")) {
        const body = require(`./commands/${command}`);
        client.on("interactionCreate", i => {
            if (i.commandName === command.replace(".js", "")) body.run(client, i)?.catch(console.log);
        });
    }
});
const registerEvents = () => {
    for (const event of fs.readdirSync("./events")) {
        const body = require(`./events/${event}`);

        if (typeof body.type === "object") {
            for (const name of body.type)
                if (body.once)
                    client.once(name, body.run);
                else
                    client.on(name, body.run);
            continue;
        }
        if (body.once)
            client.once(body.type, body.run);
        else
            client.on(body.type, body.run);
    }
}

registerEvents();

client.login(token);