const {SlashCommandBuilder} = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('pings the bot'),
	async execute(interaction) {
		await interaction.reply(`Websocket heartbeat: ${client.ws.ping}ms.`);
	},
};
