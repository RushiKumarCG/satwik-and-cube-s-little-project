const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");



 module.exports = {
     name: "facepalm",
     description: "NOICE",
     run : async (client, message, args) => {
     let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        let image = await canvacord.Canvas.facepalm(user.displayAvatarURL({ format: "gif", dynamic: true }));
        let attachment = new MessageAttachment(image, "facepalm.gif");
        return message.channel.send(attachment);
    }
     }
    