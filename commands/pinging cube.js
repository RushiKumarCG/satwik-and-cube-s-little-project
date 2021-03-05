const { HelpDependencies } = require("mathjs")

const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "cs",
    description: "NOICE",
    run : async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle('Servers The Bot is in..')
            .setColor('#000000')
            .addField({
                name: 'Current servers cubebot is in',
                value: `IN  ${client.guilds.cache.size}`,
                inline: true
            }
            
            )
    }};
    