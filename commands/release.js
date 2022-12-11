const { EmbedBuilder, PermissionsBitField, PermissionFlagsBits } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("release")
        .setDescription("Publish new release!")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    run: async (client, interaction) => {
        await interaction.reply("Pong!");
    }
};