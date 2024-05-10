const {SlashCommandBuilder} = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('Ask the 8boll')
		.addStringOption(option =>
			option.setName('message')
			.setDescription('enter your message')
			.setRequired(true)
		),
	async execute(interaction) {
		const responses = [
			'Yes',
			'No',
			'Maybe',
			'Ask again later :)',
			'Better not tell you now :^)'

		];
		const ball8RNum = Math.floor(Math.random() * responses.length);
		const answer = responses[ball8RNum];
		await interaction.reply(`***8 Ball*** ${answer}`);
	}
}