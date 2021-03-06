const config = require('../config.json')

module.exports.run = (bot, message, args, discord) => {
if (config.ownerids.includes(message.author.id)) {
  if (!args) {
    let embed = new discord.RichEmbed()
    .setTitle("Activity Changer")
    .setDescription(":thumbsup: Okay! I changed my activity back to normal.")
    .setTimestamp()
    .setThumbnail(bot.user.avatarURL)
    .setColor("BLUE")
      message.channel.send({embed: embed})
    } else {
      let [game, type] = args
      let em = new discord.RichEmbed()
      .setTitle("Activity Changer")
      .setDescription(`Okay, I changed my activity to ${type.toLowerCase()} ${game.toLowerCase()}`)
      .setColor(`BLUE`)
      bot.user.setActivity(game, {type: type})
      message.channel.send({embed: em})
    }
  }
}

module.exports.help = {
  name: "changeactivity"
}
