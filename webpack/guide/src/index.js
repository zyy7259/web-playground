import { cube } from './math';
// import './style/style.css';

console.log('5 cubed is ' + cube(5));

function component() {
  const element = document.createElement('div');

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = () =>
    import(/* webpackChunkName: "print" */ './print').then(module => {
      const print = module.default;
      print();
    });

  element.appendChild(btn);
  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  });
}

import(/* webpackChunkName: "lodash-now" */ 'lodash/now')
  .then(_ => {
    console.log(_);
  })
  .catch(err => console.log('an errror occurred while loading lodash', err));
