const fs = require('node:fs');
const path = require('node:path');
const {Client, Collection, Events, GatewayIntentBits} = require('discord.js');
const {token, fl} = require('./token.json');

const client = new Client({intents: [32767, GatewayIntentBits.MessageContent]});

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

const flWords = ['slut', 'sluts', 's l u t'];

client.on(Events.MessageCreate, (message) => {
	if (message.author.bot) return;
	if (flWords.some((word) => message.content.toLowerCase().includes(word)) &&  message.author.id === fl) {
		console.log(`freee`);
		message.react(`🧦`);
	}
	// fluo msgs
	/* if (message.author.id === "109935890662477824") {
		message.react(`<:sataniaglasses:753411458393702470>`);
	} */
});

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(token);
