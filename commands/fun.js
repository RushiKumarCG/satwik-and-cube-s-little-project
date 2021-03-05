      run : async (client, message, args) => {

    if(message.content.startsWith("c!trigger")) {
     let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
     let triggered = await canvacord.Canvas.trigger(user.displayAvatarURL({ format: "png", dynamic: false }));
     let attachment = new MessageAttachment(triggered, "triggered.gif");
     return message.channel.send(attachment);
 
  }   else if(message.content.startsWith("c!rip")) {
     let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
     let image = await canvacord.Canvas.rip(user.displayAvatarURL({ format: "png", dynamic: false }));
     let attachment = new MessageAttachment(image, "rip.png");
     return message.channel.send(attachment);
  }};
 