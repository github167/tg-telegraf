const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('upload a picture please'))
bot.on('photo', handle_photo)

function handle_photo(ctx) {
  // log_request();
  save_image_from_message(ctx);
  ctx.reply(ctx.chat);
}

function save_image_from_message(ctx) {
  var cid = ctx.chat.id;
  var image_id = get_image_id_from_message(ctx);
  ctx.reply("Analyzing now");
  //var file_path = ctx.getFile(image_id).file_path;
  //ctx.reply(file_path);
}

function get_image_id_from_message(ctx) {
  //return ctx.message.photo[ctx.message.photo.length-1].file_id
  return ctx.message.photo[0].file_id;
  //return ctx.message;
}

bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))
bot.launch()
