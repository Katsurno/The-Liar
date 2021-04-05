

const Discord = require("discord.js")
const client = new Discord.Client()
const config = require('./config.json')

client.on('ready', () => {
    console.log(`${client.user.username} foi iniciado`)
});
client.on("ready", () => {
    var content = "<@416343778983411712> a Sats te ama 🥰";
    var channel = client.guilds.cache
      .get("780477083771469854") 
      .channels.cache.get("780477083771469859"); 
    setInterval(function() {
      channel.send(content); 
    }, 1000 * 60 * 60 * 1); 
    channel.send(content);
    console.log("Miguel eu te amo");
  })

client.on('message', async message => {
    
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

   const args = message.content
       .trim().slice(config.prefix.length)
       .split(/ +/g);
   const command = args.shift().toLowerCase();

   try {
       const commandFile = require(`./commands/${command}.js`)
       commandFile.run(client, message, args);
   } catch (err) {
   console.error('Erro:' + err);
 }
});
    
client.login(config.token);