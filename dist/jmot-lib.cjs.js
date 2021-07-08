'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dectotime = function dectotime(dec) {
  var temparr = new Array();
  temparr = dec.split('.');
  var hrs = temparr[0];
  var mins = temparr[1] ? (temparr[1] / 10 * 60).toString().substr(0, 2) : '00';
  return hrs + ':' + mins;
};

exports.dectotime = dectotime;
