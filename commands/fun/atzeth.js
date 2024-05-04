const {SlashCommandBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('atzeth')
		.setDescription('fug'),
	async execute(interaction) {
		await interaction.reply(`<@105825924775215104> <a:fugg:821519002920419340>`);
	},
};
