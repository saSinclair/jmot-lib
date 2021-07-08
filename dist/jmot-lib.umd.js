(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['jmot-lib'] = {}));
}(this, (function (exports) { 'use strict';

    var dectotime = function dectotime(dec) {
      var temparr = new Array();
      temparr = dec.split('.');
      var hrs = temparr[0];
      var mins = temparr[1] ? (temparr[1] / 10 * 60).toString().substr(0, 2) : '00';
      return hrs + ':' + mins;
    };

    exports.dectotime = dectotime;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
