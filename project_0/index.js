const { Telegraf } = require('telegraf');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const binarysearch = `
const binarySearch = function (arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return undefined;
}
`;
try {
  bot.start((ctx) => ctx.reply("Welcome to Abhinav's Bot"));
  bot.command('binarysearch', (ctx) => ctx.reply(binarysearch));

  bot.on('sticker', (ctx) => ctx.reply('👍'));
  bot.launch();
} catch (err) {
  console.log('unexpected error occurred', err);
}
