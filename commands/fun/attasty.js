const {SlashCommandBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('attasty')
		.setDescription('fug'),
	async execute(interaction) {
		await interaction.reply(`<@129721663599149056> <:rukaheart:1063525849996996658>`);
	},
};
