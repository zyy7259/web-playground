require('./a')

require.ensure(['./b'], function (require) {
  require('./c')
}, 'my own chunk')

require.ensure(['./b'], function (require) {
  require('./d')
}, 'my own chunk')

require.ensure([], function (require) {
  require('./a')
}, 'my own chunk')

require.ensure(['./b'], function (require) {
  require('./a')
  require('./d')
})
