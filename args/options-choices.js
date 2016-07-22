/**
* @Author: Zhang Yingya(hzzhangyingya) <zyy>
* @Date:   2016-07-21T14:33:55+08:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-21T14:37:25+08:00
*/

var argv = require('yargs')
  .alias('i', 'ingredient')
  .describe('i', 'choose your sandwich ingredients')
  .choices('i', ['peanut-butter', 'jelly', 'banana', 'pickles'])
  .option('size', {
    alias: 's',
    describe: 'choose a size',
    choices: ['xs', 's', 'm', 'l', 'xl']
  })
  .help('h')
  .alias('h', 'help')
  .argv

console.log(argv)

/*
node options-choices.js -h
node options-choices.js -i foo
node options-choices.js -i jelly
node options-choices.js -s bar
node options-choices.js -s m
 */
