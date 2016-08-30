function getTemplate (templateName, callback) {
  require('../require.context/templates/' + templateName, function (tpl) {
    callback(tpl)
  })
}

getTemplate('a.js', function (a) {
  console.log(a)
})

getTemplate('b.js', function (b) {
  console.log(b)
})
