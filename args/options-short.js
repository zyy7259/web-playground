/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-20T17:03:42+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-20T17:09:51+08:00
*/

var argv = require('yargs').argv

console.log('(%d,%d)', argv.x, argv.y)

/*
node options-short.js -x=10 -y=21
node options-short.js -x 10 -y 21
 */
