const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const { version } = require("discord.js")
    var list = client.guilds.map(r => r.name + ` | **${r.memberCount} membres**`)
    //const duration = moment.duration(bot.uptime).format(" D [j], H [h], m [m], s [s]");
    var serversembed = new Discord.RichEmbed()
    .addField(`:satellite: __Actif sur :__`,`${client.guilds.size} serveurs.`, true)
    .addField(":ping_pong: __Le bot a un ping de :__",client.ping +"ms", true)
    .setTitle("📝 Informations sur " + `${client.user.username}`, true)
    .addField("📋 __Nom__ :", `${client.user.username}`, true)
    .addField("🔗 __Tag__ :", "#" + `${client.user.discriminator}`, true)
    .addField("📌 __Développeur__ :", "julioju#7775 et TonyCraft500#7212 ", true)
    .addField("📊 __Utilisateurs__ :", `${client.users.size}`, true)
    .addField("🔧 __Version de discord.js__ :", `v${version}`, true)
    .addField("🔨 __Version de node.js__ :", `${process.version}`, true)
    .addField(":white_check_mark:  __En ligne depuis__ :", (Math.round(client.uptime / (1000 * 60 * 60))) + ' heures ' + (Math.round(client.uptime / (1000 * 60)) % 60) + ' minutes ' + (Math.round(client.uptime / 1000) % 60) + ' secondes ', true)
    .addField("💾 __Mémoire__ :", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}` + " MB", true)
    .setFooter(`Bot dev par Julioju`)
    
    .setColor("#00FFFF")
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()
    message.channel.sendEmbed(serversembed);
  }

module.exports.help = {
    name: "botinfo"
};
