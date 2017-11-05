const schedule = require('./utils/schedule.js');
const auto_sign_puppeteer = require('./auto_sign_puppeteer');

// schedule.runTaskDaily('*:*:10', auto_sign_puppeteer);

function task () {
  console.log('11111');
}

schedule.runTaskDaily('*:*:*', task);
