require('bundle!./a')(function (a) {
  require('./c')
  console.log(a)
})

require('bundle?lazy!./b')(function (b) {
  console.log(b)
})

require('bundle!./c')(function (c) {
  console.log(c)
})
