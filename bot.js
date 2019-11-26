const Discord = require("discord.js");
const client = new Discord.Client();
async def on_member_join(self, member):
        guild = member.guild
            wlc_msg = 'Welcome {0.name} to {1.name}!'.format(member, guild)
            channel = client.get_channel(635898451640582186)
            await channel.send(have a good moment with **kova**)
client.login(process.env.BOT_TOKEN);