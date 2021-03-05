const Discord = require('discord.js');
const client = new Discord.Client();
const { token} = require('./config.json')
const fetch  = require('node-fetch')
const axios = require("axios")




const prefix = ('c!');


const { readdirSync } = require('fs');



const { join } = require('path')






const { profile } = require('console');
const { config } = require('process');
const { userInfo } = require('os');

client.commands= new Discord.Collection();
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();

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
    let chx = db.get(`welchannel_${member.guild.id}`); if (chx === null) { return; }
client.channels.cache.get(chx).send(`hello And Welcome ${messsge.member.tag}
 
   let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg" })
 
    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    `);
 
    channel.send(
      `Welcome to the server, ${member.user.username}!`,
      attachment
    );   
   });
 
  

client.login('tokenn');
//mundu token :-ODAxMTIxNTI4NTU2OTQ1NDc4.YAcEkA.SNwvGqi63BZOSDQQks5D3TcSzHE
