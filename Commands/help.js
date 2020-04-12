const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
var sender = message.author
const help_embed = new Discord.RichEmbed()
.setTitle('Commandes Graphicoum :')
.setDescription("Je suis un Bot Discord à t'a disposision")

.addField("Prefix :",`**/**`)                                                                                                                               
.addField(":question: • **Utile**","`botinfo`,`channelinfo`,`serveurinfo`,`userinfo`,")
.setFooter(`Bot dev par Julioju ©
| Demander par : ${message.author.username}`)

.setColor("#00FFFF")
.setThumbnail(client.avatarURL)

message.channel.send(help_embed);
console.log("help embed")
}

module.exports.help = {
    name: "help"
};
