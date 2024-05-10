const {SlashCommandBuilder, MessageAttachment} = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ffxiv')
		.setDescription('ping ffxiv')
		.addStringOption(option =>
			option.setName('message')
			.setDescription('enter your message')
		),
	async execute(interaction) {
		const responses = [
			'https://imgur.com/3m4NJ5q',
			'https://imgur.com/yvQTIlg',
			'https://imgur.com/ox3ALBa',
			'https://imgur.com/p9dbkD9',
			'https://imgur.com/wMYlqIL',
			'https://imgur.com/SE6sWdK',
			'https://imgur.com/OFlW7lV',
			'https://imgur.com/n6fFSeV',
			'https://imgur.com/DZnDfWc',
			'https://imgur.com/r8xXYBk'
		];
		const ffxivRNum = Math.floor(Math.random() * responses.length);
		const answer = responses[ffxivRNum];
		const msg = interaction.options.getString('message');
		console.log(`<@&1156018205127618641>  ${answer}`);
		await interaction.reply(`<@&1156018205127618641> ${msg} ${answer}`);
	}
}
