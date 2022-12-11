import { Interaction, Client, ChatInputCommandInteraction } from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";

interface Command {
     data: SlashCommandBuilder,
     handler: (client: Client, interaction: ChatInputCommandInteraction) => void;
}