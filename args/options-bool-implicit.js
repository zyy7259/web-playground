/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-20T17:05:34+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-21T14:26:11+08:00
*/

var argv = require('yargs').argv

if (argv.s) {
  // french
  process.stdout.write(argv.fr ? 'Le perroquet dit: ' : 'The parrot says: ')
}

console.log(
  (argv.fr ? 'couac' : 'squawk') + (argv.p ? '!' : '')
)

/*
node options-bool-implicit.js
node options-bool-implicit.js -s
node options-bool-implicit.js -sp
node options-bool-implicit.js --fr
node options-bool-implicit.js -s --fr
node options-bool-implicit.js -sp --fr
 */
