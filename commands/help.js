const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "Doras Bag",

    async run (client, message, args){

        

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`-kick`', 'Kicks a member from your server via mention or ID')
        .addField('`-ban`', 'Bans a member from your server via mention or ID')
        .addField('`-clear`', 'Purges messages')
        .addField('`-say`', 'Make the Bot Say Something')
        .addField('`-unban`', 'UnBan Someone Who is Already Banned')
        .addField('`-slowmode`', 'Custom SlowMode :)')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`-meme`', 'Generates a random meme')
        .addField('`-as`', 'Converts text into ascii')
        
        
        .addField('`-tictactoe`', 'Play a Game of Tictactoe')
        
        
        .setTimestamp()

        const images = new Discord.MessageEmbed()
        .setTitle('Image')

        .addField('`-beautiful`', 'makes you beautiful')
        .addField('`-trigger`', 'trigger someone XD')
        .addField('`-blur`', 'B L U R')
        .addField('`-hitler`', 'Makes You Dangerous Than Hitler')
        .addField('`-hug`', 'Mention Two People To Make Them Hug Each Other')
        .addField('`-jail`', 'Send Someone To Jail')
        .addField('`-pat`', 'Mention Tow People To Make One Pat The Other')
        .addField('`-rip`', 'R.I.P in peace :)')
        .addField('`-sepia`', 'Make Someone From Past')
        .addField('`-shit`', 'Ah Shit There We Go Again')
        .addField('`-trash`', 'its trash can time')
        .addField('`-wanted`', 'makes You A 5 Star Hotel , hehe boi')
        .addField('`-wasted`', 'Makes You Wasted XD')
        .addField('`-wink`', 'Mention Two People for a Wink ')
        .setTimestamp()


        










        const animals = new Discord.MessageEmbed()
        .setTitle('Animals')
        .addField('`-bird`', 'Daily Dose Of Birds')
        .addField('`-cat`', 'Daily Dose of Cats')
        .addField('`-dog`', 'Daily Dose of Dogs')
        .addField('`-fox`', 'Daily Dose of Fox')
        .addField('`-koala`', 'Daily Dose of Koala')
        .addField('`-panda`', 'Daily Dose of Panda')
        .addField('`-aww`', 'Shows a cute image :D')
        .setTimestamp()


        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        
        
        .addField('`-ping`', 'Get the bot\'s API ping')
        .addField('`-weather`', 'Checks weather forecast for provided location')
        .addField('`-covid country `', 'shows covis status in country')
        .addField('`-avatar`', 'Get someones avater image')
        .addField('`-ig`', 'Get Someones Instagram Details')
        .addField('`-caclulate`', 'does a maths question')
        .addField('`-pokemon name`', 'Get info about a pokemon')
        .addField('`-trivia`', 'Play Trivia')
        .addField('`-ufo`', 'get User Info')
        .addField('`-bfo`', 'get Bot Info')
        .setTimestamp()

        const pages = [
                moderation,
                images,
                fun,
                animals,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}