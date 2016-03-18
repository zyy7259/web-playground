var MainContainer = document.getElementById('MainContainer');
MainContainer.style.position = 'absolute';
MainContainer.style.top = '98px';
MainContainer.style.bottom = 0;
MainContainer.style.left = 0;
MainContainer.style.right = 0;

var clickHotDiv = document.getElementById('clickHotDiv');
clickHotDiv.style.width = '100%';
clickHotDiv.style.height = '100%';

window.addEventListener('message', function(event) {
    var data = event.data;
    try {
        data = JSON.parse(data);
        // debugger;
        switch (data.cmd) {
            case 'setHeight':
            var height = data.value + 'px';
            var hotContainer = document.getElementById('hotContainer');
            var flashMapDiv = document.getElementById('flashMapDiv');
            var flashMaps = document.getElementById('flashMaps');
            var flashMask = document.getElementById('flashMask');
            var frameMask = document.getElementById('frameMask');
            var framePage = document.getElementById('framePage');
            hotContainer.style.height = height;
            flashMapDiv.style.height = height;
            flashMaps.style.height = height;
            flashMask.style.height = height;
            frameMask.style.height = height;
            framePage.style.height = height;
            break;
        }
    } catch (e) {
        console.error(e);
    }
});

var framePage = document.getElementById('framePage');
var data = {
    cmd: 'setHeight',
    value: MainContainer.offsetHeight
};
data = JSON.stringify(data);

function init() {
    framePage.contentWindow.postMessage(data, '*');
}

var time = 0;
if (location.href.indexOf('tongji.baidu.com') === -1) {
    time = 5000;
}
setTimeout(function() {
    init();
}, time);