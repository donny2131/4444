const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready',  () => {
  console.log('By:Un');
});

var prefix = "#";

client.on('message', message => {
    if(message.content === prefix + 'createcolors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#F9EBEA",
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#F2D7D5",
                    permissions: []
     })
                message.guild.createRole({
                  name: "3",
                    color: "#E6B0AA",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "4",
                    color: "#D98880",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",
                    color: "#CD6155",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#C0392B",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",
                    color: "#A93226",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#922B21",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#FDEDEC",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "9",
                    color: "#FADBD8",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",
                    color: "#F5B7B1",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#F1948A",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "12",
                    color: "#EC7063",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "13",
                    color: "#E74C3C",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#CB4335",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#B03A2E",
                    permissions: []
     })
                               message.guild.createRole({
                  name: "16",
                    color: "#F5EEF8",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "17",
                    color: "#EBDEF0",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#D7BDE2",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",
                    color: "#C39BD3",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#AF7AC5",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#9B59B6",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#884EA0",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#76448A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#F4ECF7",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#E8DAEF",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#D2B4DE",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#BB8FCE",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "28",
                    color: "#A569BD",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#8E44AD",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "	#7D3C98",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "31",
                    color: "#6C3483",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#EAF2F8",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#D4E6F1",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "34",
                    color: "#FF8C00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "35",
                    color: "#7FB3D5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "36",
                    color: "#5499C7",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "37",
                    color: "#2980B9",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "38",
                    color: "#2471A3",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",
                    color: "#1F618D",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#EBF5FB",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "41",
                    color: "#D6EAF8",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color: "	#AED6F1",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#85C1E9",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#5DADE2",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#3498DB",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#2E86C1",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#2874A6",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#E8F8F5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#D1F2EB",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#A3E4D7",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "51",
                    color: "#76D7C4",
                    permissions: []
     })  
     
                                         message.guild.createRole({
                  name: "52",
                    color: "#48C9B0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "53",
                    color: "#1ABC9C",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "54",
                    color: "#17A589",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "55",
                    color: "#148F77",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "56",
                    color: "#E8F6F3",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "57",
                    color: "#D0ECE7",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "58",
                    color: "#A2D9CE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "59",
                    color: "#73C6B6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "60",
                    color: "#45B39D",
                    permissions: []
     })        
	    {
                 name: "61",
                    color: "#006400",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "62",
                    color: "#9ACD32",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "63",
                    color: "#6B8E23",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "64",
                    color: "#556B2F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "65",
                    color: "#66CDAA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "66",
                    color: "#8FBC8F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "67",
                    color: "#20B2AA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "68",
                    color: "#008B8B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "69",
                    color: "#008080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "70",
                    color: "#00FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "71",
                    color: "#E0FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "72",
                    color: "#AFEEEE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "73",
                    color: "#7FFFD4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "74",
                    color: "#40E0D0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "75",
                    color: "#48D1CC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "76",
                    color: "#00CED1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "77",
                    color: "#5F9EA0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "78",
                    color: "#4682B4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "79",
                    color: "#B0C4DE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "80",
                    color: "#ADD8E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "81",
                    color: "#B0E0E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "82",
                    color: "#87CEFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "83",
                    color: "#87CEEB",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "84",
                    color: "#6495ED",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "85",
                    color: "#00BFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "86",
                    color: "#1E90FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "87",
                    color: "#4169E1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "88",
                    color: "#0000FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "89",
                    color: "#0000CD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "90",
                    color: "#00008B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "91",
                    color: "#000080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "92",
                    color: "#191970",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "93",
                    color: "#FFF8DC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "94",
                    color: "#FFEBCD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "95",
                    color: "#FFE4C4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "96",
                    color: "#FFDEAD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "97",
                    color: "#F5DEB3",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "98",
                    color: "#DEB887",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "99",
                    color: "#D2B48C",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "100",
                    color: "#BC8F8F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "101",
                    color: "#F4A460",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "102",
                    color: "#DAA520",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "103",
                    color: "#B8860B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "104",
                    color: "#CD853F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "105",
                    color: "#D2691E",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "106",
                    color: "#808000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "107",
                    color: "#8B4513",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "108",
                    color: "#A0522D",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "109",
                    color: "#A52A2A",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "110",
                    color: "#800000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "111",
                    color: "#FFFFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "112",
                    color: "#FFFAFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "113",
                    color: "#F0FFF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "114",
                    color: "#F5FFFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "115",
                    color: "#F0FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "116",
                    color: "#F0F8FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "117",
                    color: "#F8F8FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "118",
                    color: "#F5F5F5",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "119",
                    color: "#FFF5EE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "120",
                    color: "#F5F5DC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "121",
                    color: "#FDF5E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "122",
                    color: "#FFFAF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "123",
                    color: "#FFFFF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "124",
                    color: "#FAEBD7",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "125",
                    color: "#FAF0E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "126",
                    color: "#FFF0F5",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "127",
                    color: "#FFE4E1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "128",
                    color: "#DCDCDC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "129",
                    color: "#D3D3D3",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "130",
                    color: "#C0C0C0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "131",
                    color: "#A9A9A9",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "132",
                    color: "#696969",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "133",
                    color: "#808080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "134",
                    color: "#778899",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "135",
                    color: "#708090",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "136",
                    color: "#2F4F4F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "137",
                    color: "#000000",
                    permissions: []
     })     

     
          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``Colors Has Been Created``')});
    }
	});
	
	

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '1');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '2');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '3');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '4');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '5');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '6');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '7');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '8');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '9');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '10');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '11');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '12');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '13');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '14');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '15');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '16');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '17');
		
		role.delete()
		}
	
	});



	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '18');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '19');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '20');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '21');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '22');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '23');
		
		role.delete()
		}
	
	});



	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '24');
		
		role.delete()
		}
	
	});



	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '25');
		
		role.delete()
		}
	
	});



	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '26');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '27');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '28');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '29');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '30');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '31');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '32');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '33');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '34');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '35');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '36');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '37');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '38');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '39');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '40');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '41');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '42');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '43');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '44');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '45');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '46');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '47');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '48');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '49');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '50');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '51');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '52');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '53');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '54');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '55');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '56');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '57');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '58');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '59');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '60');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '-61');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '62');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '63');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '64');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '65');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '66');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '67');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '68');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '69');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '70');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '71');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '72');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '73');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '74');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '75');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '76');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '77');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '78');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '79');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '80');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '81');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '82');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '83');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '84');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '85');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '86');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '87');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '88');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '89');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '90');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '91');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '92');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '93');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '94');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '95');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '96');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '97');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '98');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '99');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '100');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '101');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '102');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '103');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '104');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '105');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '106');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '107');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '108');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '109');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '110');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '111');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '112');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '113');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '114');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '115');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '116');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '117');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '118');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '119');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '121');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '122');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '123');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '124');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '125');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '126');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '127');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '128');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '129');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '130');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '131');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '132');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '133');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '134');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '135');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '136');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '137');
		
		role.delete()
		}
	
	});



client.login(process.env.BOT_TOKEN);
