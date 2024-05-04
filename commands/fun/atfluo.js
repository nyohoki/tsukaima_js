const {SlashCommandBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('atfluo')
		.setDescription('fug'),
	async execute(interaction) {
		await interaction.reply(`<@109935890662477824> <:yosho:261810001922883584>`);
	},
};
