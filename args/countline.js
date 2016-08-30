/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-21T13:20:26+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-22T14:23:57+08:00
*/

var argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .command('count', 'Count the lines in a file', {})
  .example('$0 count -f foo.js', 'count the lines in the given file')
  .option('f', {
    alias: 'file',
    describe: 'Load a file',
    required: true,
    nargs: 1,
    global: true
  })
  .demand(1)
  .help('h')
  .alias('h', 'help')
  .epilog('copyright 2016')
  .argv

var fs = require('fs')
fs.readFile(argv.file, 'utf8', function (err, data) {
  if (err) throw err
  console.log(data.match(/\n/g).length)
})

/*
node countline.js
node countline.js count
node countline.js count -f countline.js
 */
