/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-20T16:59:19+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-20T17:09:40+08:00
*/

var argv = require('yargs').argv

if (argv.ships > 3 && argv.distance < 53.5) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers')
}

/*
node options.js
node options.js --ships=4 --distance=22
node options.js --ships 12 --distance 98.7
 */
