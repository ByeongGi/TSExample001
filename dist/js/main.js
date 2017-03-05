"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx_1 = require("rxjs/Rx");
/**
 * RXJS 기초 공부
 */
var source = Rx_1.default.Observable.range(0, 10);
var subscription = source.subscribe(function (x) { return console.log('Next: ' + x); }, function (err) { return console.log('Error: ' + err); }, function () { return console.log('Completed'); });
//# sourceMappingURL=main.js.map