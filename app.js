const Discord = require('discord.js');
const client = new Discord.Client();
const swearWords = ["darn", "sex", "pussy", "vagina", "cum", "cemen", "cock", "shit", "fuck", "shite", "dick", "cunt", "bloody", "bitch", "ass", "nigger"]; //continue to add more in this format: "", "", ...
const links = ["http", "www.", ".co.uk", ".com"];
const allowedLinkPosters = ["", "", ""];
const guild = {};
const prefix = '##';
//const guildOwner = guild.owner;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} and I am all ready to be used to protect servers!`);
    client.user.setPresence({ game: { name: 'on servers | ##help', type: '3' } });
    client.user.setStatus("online");
  });

client.on('message', message => {
  if (swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
    message.reply(":no_entry: Oh nose :nose:! You said a blacklisted word! For blacklist-free chat go into DM's!");
    message.delete();
  }
  if (links.some(word => message.content.includes(word)) ) {
    message.reply(":no_entry: Oh nose :nose:! Links are banned here! To send links go into DM's!");
    message.delete();
  }
});

client.on("message", function(message) {
  if (message.author.equals(client.user)) return;

  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");

  switch (args[0].toLowerCase()) {
case "info":
message.reply("Wondering what I am maybe? I am a bot the provents rude words being posted in the server and I make it so you can't post links.  The only commands are **##info** and **##credit**!")
break;
case "credit":
var embed = new Discord.RichEmbed()
.setFooter("© The Bot Company | This is SafeZone's list of credits.")
.setColor("0x7DCEA0")
.setTitle("SafeZone's Credits")
.setThumbnail("https://cdn.discordapp.com/attachments/299067580277063680/391615885909164032/image.png")
.addBlankField()
.addField("TheReal_CatCrafter", "- The scripter of all TBC bots. Also the founder of the company. Make sure to say thanks for all these bots!")
.addField("AviaBeast", "- The co-founder  of TBC, without him we would never be here!")
.addField("G.S", "- Making our logo for SafeZone, we all love it right?")
.addField("EVERYONE ELSE", "- Thank you for supporting us!")
message.channel.sendEmbed(embed);
break;
    default:
        message.channel.sendMessage("That command is invalied. This bots prefix is **##**. The only commands on this bot are **##info** and **##credit**.");
     } 
});  

client.login(process.env.BOT_TOKEN);
