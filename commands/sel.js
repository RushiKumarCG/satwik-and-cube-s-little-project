const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");



 module.exports = {
     name: "del",
     description: "NOICE",
     run : async (client, message, args) => {
     let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        let image = await canvacord.Canvas.delete(user.displayAvatarURL({ format: "gif", dynamic: false }));
        let attachment = new MessageAttachment(image, "delete.png");
        return message.channel.send(attachment);
    }
     }
    