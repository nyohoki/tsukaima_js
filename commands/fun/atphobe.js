const {SlashCommandBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('atphobe')
		.setDescription('fug'),
	async execute(interaction) {
		await interaction.reply(`<@396086725849382933> <a:plzwave:1104870713803939920>`);
	},
};
