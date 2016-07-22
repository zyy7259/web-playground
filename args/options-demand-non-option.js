/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-20T17:30:00+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-21T14:49:48+08:00
*/

var argv = require('yargs')
  .demand(2)
  .argv

console.dir(argv)

/*
node options-demand-non-option.js
node options-demand-non-option.js a
node options-demand-non-option.js a b
node options-demand-non-option.js a b c
*/
