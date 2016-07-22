/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-20T17:21:45+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-21T14:47:17+08:00
*/

var argv = require('yargs')
  .count('verbose')
  .alias('v', 'verbose')
  .argv

var VERBOSE_LEVEL = argv.verbose

function WARN() {
  VERBOSE_LEVEL >=0 && console.log.apply(console, arguments)
}

function INFO() {
  VERBOSE_LEVEL >= 1 && console.log.apply(console, arguments)
}

function DEBUG() {
  VERBOSE_LEVEL >= 2 && console.log.apply(console, arguments)
}

WARN('Showing only important stuff')
INFO('Showing semi-important stuff too')
DEBUG('Extra chatty mode')

console.log(argv)

/*
node options-bool-count.js
node options-bool-count.js -v
node options-bool-count.js --verbose
node options-bool-count.js -vv
node options-bool-count.js -v --verbose
node options-bool-count.js --verbose --verbose
 */
