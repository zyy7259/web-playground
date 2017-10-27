import json from './index.json';

console.log(json);
window.json = json;
window.colors = json.pages[0].layers[0];
