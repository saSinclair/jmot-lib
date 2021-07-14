function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var dectotime = function dectotime(dec) {
  var temparr = new Array();
  temparr = dec.split('.');
  var hrs = temparr[0];
  var mins = temparr[1] ? (temparr[1] / 10 * 60).toString().substr(0, 2) : '00';
  return hrs + ':' + mins;
};

var adddectotime = function adddectotime(dec, time) {
  var _Array = new Array(),
      _Array2 = _slicedToArray(_Array, 3),
      temparr = _Array2[0],
      temparr2 = _Array2[1],
      temparr3 = _Array2[2];

  var tempest = dectotime(dec);
  temparr = time.split(':');
  temparr2 = tempest.split(':');
  var newt1 = Number(temparr[0] + '.' + temparr[1]).toFixed(2);
  var newt2 = Number(temparr2[0] + '.' + temparr2[1]).toFixed(2);
  var newtsum = (Number(newt1) + Number(newt2)).toFixed(2);
  temparr3 = newtsum.toString().split('.');
  var condmin = Number(temparr3[1]) - 60 < 10 ? '0' + (Number(temparr3[1]) - 60) : Number(temparr3[1]) - 60;
  var condhrcond = Number(temparr3[0]) - 24 < 10 ? '0' + (Number(temparr3[0]) - 24) : Number(temparr3[0]) - 24;
  var condhr = Number(temparr3[0]) > 23 ? condhrcond : Number(temparr3[0]);
  var totaltime = Number(temparr3[1]) > 59 ? Number(condhr) + 1 + ':' + condmin : condhr + ':' + temparr3[1];
  return totaltime;
};

var currenttime = function currenttime() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'zz';
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HH:MM';

  if (x == 'HH:MM:SS') {
    return new Date().toLocaleString('zz', ({
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }));
  } else {
    var p = new Date().toLocaleString(x, ({
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }));
    var q = new Date().toLocaleString(x, ({
      hour: '2-digit',
      minute: '2-digit'
    }));
    var z = y == 'HH:MM:SS' ? p : q;
    return z;
  }
};

export { adddectotime, currenttime, dectotime };
