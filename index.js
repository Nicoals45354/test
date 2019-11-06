const Discord = require('discord.js')
const client = new Discord.Client();
const bot = new Discord.Client()
var ping = require ("net-ping");

bot.on("ready", async () => {
  console.log("Je suis connecté !")
  var guild = bot.guilds.get("571723237394743297");
  if(!guild) return console.log("Error: Guild introuvable");
  var channel = guild.channels.get("639874357132263464");
  if(!channel) return console.log("Error: Channel introuvable");
  channel.bulkDelete(5, true);
  status = await channel.send("Merci de patientez...")
  bot.user.setStatus('Online')
  bot.user.setGame('Zendaria-Hosting')
  updateStatus();
  setInterval(updateStatus, 2000); //chaque 20secondes
})

function updateStatus(){
  //var session = ping.createSession({_debug: true}); le debug
  var session = ping.createSession();
  var site= "217.182.220.118"; //cubeheberg.fr
  var msSite= 0;
  session.pingHost (site, function (errorSite, target, sent, rcvd) {
      msSite = rcvd - sent;
      if (errorSite)
          console.log ("Bot-Zendaria-Hosting"+ errorSite.toString ());
          //srv2
          var srv2= "217.182.220.118"; //srv2
          var msSrv2= 0;
          session.pingHost (srv2, function (errorSrv2, target, sent, rcvd) {
              msSrv2= rcvd - sent;
              if (errorSrv2)
                  console.log ("Site"+ errorSrv2.toString ());
			  var srv6= "193.70.76.152"; //srv5
          var msSrv6= 0;
          session.pingHost (srv6, function (errorSrv6, target, sent, rcvd) {
              msSrv6= rcvd - sent;
              if (errorSrv6)
                  console.log ("Panel Game"+ errorSrv6.toString ());
			  var srv8= "dev"; //srv7
          var msSrv8= 0;
          session.pingHost (srv8, function (errorSrv8, target, sent, rcvd) {
              msSrv8= rcvd - sent;
              if (errorSrv8)
                  console.log ("Client"+ errorSrv8.toString ());
                  var srv10= "dev"; //srv9
          var msSrv10= 0;
          session.pingHost (srv10, function (errorSrv10, target, sent, rcvd) {
              msSrv10= rcvd - sent;
              if (errorSrv10)
                  console.log ("Vps Node1"+ errorSrv10.toString ());
                          //status.edit("Site: "+msSite+" ms \nSrv1: "+msSrv1+" ms\nSrv2:"+msSrv2+" ms\nSrv3: "+msSrv3+" ms\nSrv4: "+msSrv4+" ms\nClient:" +msClient+" ms");
                          var embed = new Discord.RichEmbed()
                              .setTitle("Voici les status des service de Zendaria-Hosting")
                              .setColor("RANDOM")
                              .setDescription("**les résultats sont actualisé tout les 20 secondes**")
                              .addField("Status de Node Site :",(errorSrv2? "⛔ Ce service est indisponible il sera bientôt de retour":"En ligne ✅ \nLatence: "+msSrv2+"ms"))
							  .addField("Status de Node VPS :",(errorSrv10? "⛔ Ce service est indisponible il sera bientôt de retour":"En ligne ✅ \nLatence: "+msSrv10+"ms"))
							  .addField("Status de Panel GAME :",(errorSrv6? "⛔ Ce service est indisponible il sera bientôt de retour":"En ligne ✅ \nLatence: "+msSrv6+"ms"))
							  .addField("Status de Bot Zendaria-Hosting :", (errorSite? "⛔ Ce service est indisponible il sera bientôt de retour":"En ligne ✅ \nLatence: "+msSite+"ms"))
							  .addField("Status de L'espace Client :",(errorSrv8? "⛔ Ce service est indisponible il sera bientôt de retour":"En ligne ✅ \nLatence: "+msSrv8+"ms"))
                              .setFooter("@Zendaria-Hosting")
                              .setTimestamp();
                          status.edit(embed);

                          //fin client
             });
			   //fin srv4
		  });
		    //fin srv5
	   });
	     //fin srv6
 });  
   //fin srv8
});
// srv10
}


bot.login('NjA3MjgzODU3MzQ3MzEzNjY0.XbyGRw.jZ2-H9NpTDaE69sxr7HOW2-xYJ0')
