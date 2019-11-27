const Discord = require('discord.js');
const discord = new Discord.Client();
 
console.log("TAR7EB");
 

client.on("guildMemberAdd", member => {
     if (member.guild.id === "635898451640582184") {
  return channel.send(` have a good moment with **kova** ‘ ${member} `)
var channel =member.guild.channels.find('name', 'sayhi')

}
})   
              
client.login(process.env.BOT_TOKEN);
