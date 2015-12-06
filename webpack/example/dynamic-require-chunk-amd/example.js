function getTemplate(templateName, callback) {
    require(['../dynamic-require/templates/' + templateName], function(tpl) {
        callback(tpl());
    });
}
getTemplate('a', function(a) {
    console.log(a);
});
getTemplate('b', function(b) {
    console.log(b);
});