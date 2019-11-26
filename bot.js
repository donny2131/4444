const Discord = require("discord.js");
const client = new Discord.Client();

async def on_member_join(self, member):
        guild = member.guild
            wlc_msg = 'have a good moment with **kova**'.format(member, guild)
            channel = client.get_channel(635898451640582186)
            await channel.send(wlc_msg)


client.login(process.env.BOT_TOKEN);
