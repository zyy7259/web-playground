/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-21T14:51:56+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-21T14:56:37+08:00
*/

var argv = require('yargs')
  .usage('Usage: ...')
  .alias('f', 'foo')
  .describe('f', 'blabla')
  .describe({
    's': 'asdf',
    'i': 'qwer'
  })
  .help('h')
  .alias('h', 'help')
  .argv

/*
node options-describe.js
 */
