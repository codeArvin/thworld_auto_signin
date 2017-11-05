const fs = require('fs');

// 向文件写入信息，
// path：文件路径
// string： 写入的信息
function writeFile(path, string) {
  fs.writeFile(path, string, { flag: 'a' }, function(err) {
    if (err) {
      return console.error('error: ', err);
    }
  })
}

module.exports = {
  writeFile,
};
