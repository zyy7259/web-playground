/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-21T14:27:29+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-21T14:32:17+08:00
*/

var argv = require('yargs')
  .usage('Usage: <command> [options]')
  .alias('f', 'foo')
  .check(function (parsedArgv, aliases) {
    // console.log(parsedArgv)
    // console.log(aliases)
    if (parsedArgv.foo === undefined) {
      throw 'please provided foo'
    }
    return true
  })
  .argv

/*
node options-check.js
node options-check.js --foo bar
 */
