/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-21T14:43:16+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-21T14:45:02+08:00
*/

var argv = require('yargs')
  // default 'config'
  .config()
  .config({
    baz: 3
  })
  .argv

console.log(argv)

/*
node options-config.js --config config.json
 */
