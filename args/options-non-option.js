/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-20T17:14:12+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-20T18:22:58+08:00
*/

var argv = require('yargs').argv

console.log('%d,%d', argv.x, argv.y)
console.log(argv._)

/*
node options-non-option.js -x 6.82 -y 3.35 num
node options-non-option.js "me hearties" -x 0.54 yo -y 1.12 ho
 */
