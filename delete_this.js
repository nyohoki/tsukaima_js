const {REST, Routes} = require('discord.js');
const {token} = require('./token.json');
const {gidGFB} = require('./gids.json');
const rest = new REST().setToken(token);

// delete all tsukaima slash commands
rest.put(Routes.applicationGuildCommands("593207915918131251", gidGFB), {body: []})
	.then(() => console.log('Successfully deleted all guild commands.'))
	.catch(console.error);
// for global commands
rest.put(Routes.applicationCommands("593207915918131251"), {body: []})
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);
