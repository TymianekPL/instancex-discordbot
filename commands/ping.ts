import { Command } from "../commands";
import { SlashCommandBuilder } from "@discordjs/builders";
import { ChatInputCommandInteraction, Client, Interaction } from "discord.js";

const command: Command = {
     data: new SlashCommandBuilder()
          .setName("ping")
          .setDescription(""),
     handler: async (client: Client, i: ChatInputCommandInteraction) => {
          await i.reply("Pong!");
     }
};

export default command;