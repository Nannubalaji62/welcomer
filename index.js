let Discord = require("discord.js");
let client = new Discord.Client();

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "Watching new members join..."}}) //this is the bot's status, change it if you wish to...

client.on("guildMemberAdd", member => {
if (member.guild.id === "Your server id here")//add your guild ID here {
  
  
  client.channels.cache.get("your welcome channel id here").send(`Welcome ${member}!! Thanks for joining the server.. Hope you enjoy your stay here :D`)
}//                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ add your welcomer channel ID here 
})

client.login("your top secret token here..")//and finally, your bot's token to login :D
