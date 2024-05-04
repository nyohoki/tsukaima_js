const {SlashCommandBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('atsword')
		.setDescription('fug'),
	async execute(interaction) {
		await interaction.reply(`<@230833268440825858> <:potions:472145003167088650>`);
	},
};
