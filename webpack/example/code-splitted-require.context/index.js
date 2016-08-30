function getTemplate (templateName, callback) {
  require.ensure([], function (require) {
    callback(require('../require.context/templates/' + templateName))
  })
}

getTemplate('a.js', function (a) {
  console.log(a)
})

getTemplate('b.js', function (b) {
  console.log(b)
})
