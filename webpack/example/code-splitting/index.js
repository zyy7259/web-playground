require('./a')
require('./b')

require.ensure(['./c'], function (require) {
  require('./b')
  require('./d')
})
