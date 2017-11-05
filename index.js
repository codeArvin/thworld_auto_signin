const schedule = require('./utils/schedule.js');
const auto_sign_puppeteer = require('./auto_sign_puppeteer');

//schedule.runTaskDaily('11:32:00', auto_sign_puppeteer);
auto_sign_puppeteer();
