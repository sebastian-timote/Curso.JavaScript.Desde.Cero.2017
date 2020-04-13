"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

console.log(window.scrollY); //estas funciones hacen lomismo

console.log(document.body.scrollTop); //estas funciones hacen lomismo pero esta no me funciono

var getInitialScroll = function getInitialScroll() {
  return window.scrollY;
};

var getFinalScroll = function getFinalScroll(element) {
  return Math.floor(element.getBoundingClientRect().top + //da una posicion fija del elemento
  getInitialScroll());
}; //getboundingclientrect -> detecta las coodenadas respecto al viewport


var animatedScrollTo = function animatedScrollTo(targetElement, time) {
  var initialPosition = getInitialScroll(),
      finalPosition = getFinalScroll(targetElement),
      distanceToScroll = finalPosition - initialPosition,
      scrollFragment = distanceToScroll / time;
  animatedScroll(scrollFragment, finalPosition);
};

var animatedScroll = function animatedScroll(scrollFragment, finalPosition) {
  var y = 0;
  var animatedScroll = setInterval(function () {
    //document.body.scrollTop += 10;
    y += scrollFragment;
    window.scrollBy(0, y);

    if (scrollFragment > 0) {
      if (window.scrollY > finalPosition - scrollFragment / 2) clearInterval(animatedScroll);
    } else {
      if (window.scrollY < finalPosition - scrollFragment / 2) clearInterval(animatedScroll);
    }
  }, 1);
};

var animatedScrollEvent = function animatedScrollEvent(originElement, time) {
  if (originElement.tagName === 'A' && originElement.hash !== '') {
    //(si es un enlace y si tiene un #)
    var targetElement = document.getElementById(originElement.hash.slice(1)); //quita el #()hash

    originElement.addEventListener('click', function (e) {
      e.preventDefault();
      animatedScrollTo(targetElement, time);
    });
  }
};

var animatedScrollAllLinks = function animatedScrollAllLinks(time) {
  var links = document.links;

  var _iterator = _createForOfIteratorHelper(links),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var link = _step.value;
      animatedScrollEvent(link, time);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

animatedScrollAllLinks(5200); //
//animatedScrollEvent(document.getElementById('menu'), 500);
//console.log(getFinalScroll(document.getElementById('cap1')));