const {REST, Routes} = require('discord.js');
const {token, gidGFB, gidBake, gidTsu, botId} = require('./token.json');
const rest = new REST().setToken(token);

// delete all tsukaima slash commands
rest.put(Routes.applicationGuildCommands(botId, gidGFB), {body: []})
	.then(() => console.log('Deleted GFB commands.'))
	.catch(console.error);
rest.put(Routes.applicationGuildCommands(botId, gidBake), {body: []})
	.then(() => console.log(`Deleted Bake commands.`))
	.catch(console.error);
rest.put(Routes.applicationGuildCommands(botId, gidTsu), {body: []})
	.then(() => console.log(`Deleted Tsu commands.`))
	.catch(console.error);
// for global commands
rest.put(Routes.applicationCommands(botId), {body: []})
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);
