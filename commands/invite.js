const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "invite",
    category: "bot",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle('press here...!')
            .setColor('#000000')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=801121528556945478&permissions=0&scope=bot')
            .setFooter(`BY CubeGamerYT \n requested by ${message.author.tag}`)
            .setTimestamp()

        await message.channel.send(embed)
    }
}