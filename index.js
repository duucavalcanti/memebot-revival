const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const { prefix } = require('./config.json');
var tocadorDeAudios = require('./tocarAudios.js');
const message = new Discord.Message();
client.commands = new Discord.Collection();

//client Connected
client.on('ready', () => {
  //NotifyChannel = client.channels.cache.get("74550791179874304");

  //var canal = msg.channel;
  //canal.send("ATENCAO \nTO ON!");

  console.log('Rodando!');
});

//recebimento de mensagem
client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).split(/ +/);
  var command = args.shift().toLowerCase();
  var canal = msg.channel;
  
  //img
  if (command === 'ping') {
    canal.send('Pong.');
  }

  //audio
  tocadorDeAudios.tocarAudiosFuncao(msg, command);

}); 

//AUTH 
client.login(config.BOT_TOKEN);
require('http').createServer().listen(); 