import { REST } from "discord.js";
import fs from "fs";
import {Routes} from "discord-api-types/v9";

let commands = [];

const slashFiles = fs.readdirSync("./commands").filter((file: string) => file.endsWith(".js"));
for (const file of slashFiles) {
     const slashcmd = require(`./commands/${file}`);

     commands.push(slashcmd.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);
console.log("Deploying slash commands");
rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands })
     .then(() => {
          console.log("Successfully loaded");
          process.exit(0);
     })
     .catch((err) => {
          if (err) {
               console.log(err);
               process.exit(1);
          }
     });