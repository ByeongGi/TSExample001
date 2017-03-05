"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("@reactivex/rxjs");
var target = document.querySelector('#textarea1');
rxjs_1.Observable.range(1, 10).subscribe(function (v) { return console.log("NEXT : " + (target.value += v + '\n')); }, function (e) { return console.log("error : " + e); }, function () { return console.log('COMPLEATE!!!'); });
//# sourceMappingURL=index.js.map