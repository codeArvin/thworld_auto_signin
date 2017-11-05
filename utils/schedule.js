const CronJob = require('cron').CronJob;

// 计划任务，每天特定时间执行任务
// time：需要执行任务的时间，时：分：秒，eg：12:45:00
// task：执行的任务
function runTaskDaily(time, task) {
  const time_arr = time.split(':');
  const cronTime = `${time_arr[2]} ${time_arr[1]} ${time_arr[0]} * * *`;
  new CronJob(
    cronTime,
    task,
    function () { console.log('the schedule stoped!') },
    true,
  )
}

module.exports = {
  runTaskDaily,
}
