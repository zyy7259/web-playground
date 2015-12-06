define([
    './r1',
    './r2',
    'require'
], function(r1, r2, require) {
    console.log(r1);
    console.log(r2);
    console.log(require.toUrl('./r1'));
});