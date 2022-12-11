const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");
const { config } = require("dotenv");
config({
    path: "../.env"
});
const token = process.env.TOKEN;
const fs = require("fs");

const commands = [];
const commandFiles = fs.readdirSync(".").filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = process.env.CLIENT_ID;

for (const file of commandFiles) {
    if (file == "index.js") continue;

    const command = require(`./${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
        console.error(error);
    }
})();