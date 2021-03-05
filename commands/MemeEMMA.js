const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "meme",
    category: "extra",
    run: async (client, message, args) => {
        const url = 'https://chilledcoders.ml/rmeme';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`Hey, <@${message.author.id}> api is currently Down...:frowning::frowning: It will be alright soon :)`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Meme: `)
            
            .setColor('#00FFFF')
            .setImage(data.image)
            

        await message.channel.send(embed)
    }
}