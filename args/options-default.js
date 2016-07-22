/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-20T18:24:38+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-20T18:26:10+08:00
*/

var argv = require('yargs')
  .default('x', 10)
  .default({
    y: 10,
    z: 10
  })
  .argv

console.log(argv.x + argv.y + argv.z)

/*
node options-default.js
node options-default.js -x 5
node options-default.js -y 7
 */
