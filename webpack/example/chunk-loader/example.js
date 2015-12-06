require("bundle!./file.js")(function(fileJsExports) {
    console.log(fileJsExports);
});
require("bundle!./image.js")(function(imageJsExports, audioJsExports) {
    console.log(imageJsExports);
});
require("bundle!./audio.js")(function(audioJsExports) {
    console.log(audioJsExports);
});