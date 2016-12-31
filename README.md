# hidden attribute polyfill

Implements `element.hidden` attribute for browsers that support `Object.defineProperty`.

Allows to use `hidden` property binding in IE 9, IE 10 within Angular 2.

Requires to use additional global style: `[hidden] {display: none;}`.
