const {SlashCommandBuilder, InteractionResponse} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice')
		.setDescription('roll dice')
		.addIntegerOption(option =>
			option.setName('sides')
			.setDescription('number of sides')
			.setRequired(true)),
	async execute(interaction) {
		const user = interaction.user;
		const max = interaction.options.getInteger('sides');
		const answerValue = Math.floor(Math.random() * `${max}` + 1);
		await interaction.reply(`${user} rolled a ${answerValue} out of ${max}`);
	}
};
