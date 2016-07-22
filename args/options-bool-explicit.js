/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-20T22:14:11+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-21T14:26:33+08:00
*/

var argv = require('yargs')
  .boolean('v')
  .boolean(['x', 'y', 'z'])
  .argv

console.log(argv.v)
console.log([argv.x, argv.y, argv.z])
console.log(argv._)
console.log(argv)

/*
node options-bool-explicit.js "me hearties" -v yo -x ho -z bingo
 */
