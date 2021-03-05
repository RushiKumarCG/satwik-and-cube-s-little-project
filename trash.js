const Discord = require('discord.js');
const client = new Discord.Client();
const { token, default_prefix } = require('./config.json')
const fetch  = require('node-fetch')
const { CanvasSenpai } = require("canvas-senpai")
const axios = require("axios")
const canva = new CanvasSenpai();
bot.commands = new Discord.Collection();
const db = require("quick.db")
var jimp = require('jimp');

const prefix = ('c!');


const { readdirSync } = require('fs');



const { join } = require('path')

client.commands= new Discord.Collection();




const { profile } = require('console');
const { config } = require('process');
const { userInfo } = require('os');

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

client.user.setActivity("Cubegamers Command", { type: 'LISTENING'}).catch(console.error);

client.on("error", console.error);

client.on('ready', () =>{
    console.log('Cubebot is online');
    client.user.setActivity("listening to Cube gamers commands :)", { type: 'LISTENING'}).catch(console.error);

});
client.on("message", message => {
    if (message.content.toLowerCase() === 'Hello') {
        message.channel.send("**Hey! What's Up?**")
    }
})



client.on("message", async message => {




   

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.on('guildMemberAdd', async member => { 
    let chx = db.get(`welchannel_${member.guild.id}`); //
 
   let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg" })
 
    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
    

    client.channels.cache.get(chx).send(`Welcome to the server, ${member.user.username}!`,
    attachment) 

   })
  

   let font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK) //We declare a 32px font
  let font64 = await jimp.loadFont(jimp.FONT_SANS_64_WHITE) //We declare a 64px font
  let bfont64 = await jimp.loadFont(jimp.FONT_SANS_64_BLACK)
  let mask = await jimp.read('https://i.imgur.com/552kzaW.png') //We load a mask for the avatar, so we can make it a circle instead of a shape
  let welcome = await jimp.read('http://rovettidesign.com/wp-content/uploads/2011/07/clouds2.jpg') //We load the base image

  jimp.read(member.user.displayAvatarURL).then(avatar => { //We take the user's avatar
    avatar.resize(200, 200) //Resize it
    mask.resize(200, 200) //Resize the mask
    avatar.mask(mask) //Make the avatar circle
    welcome.resize(1000, 300)
	
  welcome.print(font64, 265, 55, `Welcome ${member.user.username}`) //We print the new user's name with the 64px font
  welcome.print(bfont64, 265, 125, `To ${member.guild.name}`)
  welcome.print(font64, 265, 195, `There are now ${member.guild.memberCount} users`)
  welcome.composite(avatar, 40, 55).write('Welcome2.png') //Put the avatar on the image and create the Welcome2.png bot
  try{
  member.guild.channels.get(wChan).send(``, { files: ["Welcome2.png"] }) //Send the image to the channel
  }catch(e){
	  // dont do anything if error occurs
	  // if this occurs bot probably can't send images or messages
  }
  })

  

client.login('ODAxMTIxNTI4NTU2OTQ1NDc4.YAcEkA.SNwvGqi63BZOSDQQks5D3TcSzHE');