/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-20T17:26:22+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-21T13:34:28+08:00
*/

var argv = require('yargs')
  .usage('Usage: $0 -w [num] -h [num]')
  .demand(['w', 'h'])
  .argv

console.log('The area is: ', argv.w * argv.h)

/*
node options-demand.js
node options-demand.js -w 55
node options-demand.js -w 55 -h 11
 */
