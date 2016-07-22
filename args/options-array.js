/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-21T14:22:08+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-21T14:23:25+08:00
*/

var argv = require('yargs')
  .array('foo')
  .argv

console.log(argv.foo)

/*
node options-array.js --foo bar baz
 */
