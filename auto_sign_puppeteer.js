const puppeteer = require('puppeteer');
const file = require('./utils/file.js');
const config = require('./config.js');

const {
  USER_NAME,
  USER_PASSWORD,
  USER_NAME_SELECTOR,
  USER_PASSWORD_SELECTOR,
  LOGIN_SELECTOR,
  SIGN_IN_SELECTOR,
  LOGIN_URL,
} = config;

async function auto_signin() {
  const start_time = new Date();
  // --no-sandbox参数是保证在unbuntu上程序能正确运�
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();

  await page.setViewport({
    width: 1440,
    height: 900,
  });

  await page.goto(LOGIN_URL);
  await page.type(USER_NAME_SELECTOR, USER_NAME);
  await page.type(USER_PASSWORD_SELECTOR, USER_PASSWORD);
  await page.click(LOGIN_SELECTOR);
  // 登陆后会延迟几秒进入用户界面
  setTimeout(async () => {
    const date = new Date().toLocaleString();
    const time = new Date() - start_time;
    await page.click(SIGN_IN_SELECTOR)
              .then(() => {
                file.writeFile('./log.txt', `${date} ${time}ms 签到成功\n`);
              })
              .catch(error => {
                file.writeFile('./log.txt', `${date} ${time}ms 签到失败(可能今天已经签过道了) ${error}\n`);
              });
    await browser.close();
  }, 5000);
}

module.exports = auto_signin;
