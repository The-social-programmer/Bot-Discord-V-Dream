const Discord = require("discord.js");

const client = new Discord.Client();



const PREFIX = "$";

client.on("ready", () => {
    console.log(`${client.user.tag} has logged in`);
});

client.on("message", (message) => {
    console.log(message.author.tag + " doit se faire incinérer")
    if (message.author.bot) return;
    if (message.content === "Salut") {
        message.reply("Salut beau gosse")
    }
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content.trim().substring(PREFIX.length).split(" ");
        
        if (CMD_NAME === "kick") {
            if (args.length === 0) return message.reply("please enter an id");
            const member = message.guild.members.cache.get(args[0])
            console.log(member)
            if (member) {
                member.kick()
            } else {
                message.channel.send("that  member was not found")
            }

            console.log(member);
            
        }
    }
    
});

client.login("OTQ3NTk1NjEyNDQwOTIwMTE0.YhvjLw.Rn6-J2pEGYD7NqrxzZZ8AahwMcQ")