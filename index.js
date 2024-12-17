const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);

try {
    bot.start((ctx) => ctx.reply('YA YA YA Alahyalabh')); // /start

    bot.command("mane", (ctx) => ctx.reply("I love you")); // /mane
    bot.command("topLinuxCommands", (ctx) => ctx.reply("ls cd pwd rm")); // /mane

    bot.on(message('sticker'), (ctx) => ctx.reply('👍')) // sticker

    bot.on(message("text"), (ctx) => ctx.reply("I dont understand humans!!!"));

    bot.launch();
}
catch {
    console.log("Unexpected command")
}

