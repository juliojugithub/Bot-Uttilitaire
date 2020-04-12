const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');
//////////Implemente le fichier  Commands//////////
fs.readdir('./Commands/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commands trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commands/${f}`);
            console.log(`${f} commands chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

//////////Implemente le fichier Commande utile//////////
fs.readdir('./Commands/utile/', (error, f) => {
  if (error) { return console.error(error); }
      let commandes = f.filter(f => f.split('.').pop() === 'js');
      if (commandes.length <= 0) { return console.log('Aucune commands trouvée !'); }

      commandes.forEach((f) => {
          let commande = require(`./Commands/utile/${f}`);
          console.log(`${f} utile commands chargée !`);
          client.commands.set(commande.help.name, commande);
      });
});


  
////////////Charge les Events////////
fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});



////TOKEN DU BOT//////////
client.login('TOKEN DE TON BOT')
