const {SlashCommandBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('attoaster')
		.setDescription('fug'),
	async execute(interaction) {
		await interaction.reply(`<@163456556921389056> <a:amogus:907125147880812595>`);
	},
};
