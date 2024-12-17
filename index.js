const { default: axios } = require('axios');
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

    bot.command("giveMeAdvice", async (ctx) => {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        ctx.reply(data.slip.advice);
    })

    bot.on("text", (ctx) => {
        console.log(ctx.update.message);
        if(ctx.update.message.text == "I love you"){
            ctx.reply("Love you too bro");
        }
        else{
            ctx.reply("Nahi samja bhai")
        }
    })

    bot.launch();
}
catch {
    console.log("Unexpected command")
}

