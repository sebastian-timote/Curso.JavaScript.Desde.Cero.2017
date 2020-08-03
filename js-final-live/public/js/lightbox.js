"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// al hacer clic en una imagen se abra su version grande
//se abre un overlay
// ese overlay debe poder cerrarse
//al abrirse la version grande debe tener lo siguiente
//descripcion de la imagen (que se tomara del atributo alt)
//navegacion entre la immagen siguiente y la anterior
//let images = document.querySelectorAll('.gallery-container img');//esta hace lo mismo que la linea8
//obtener la galeria de imagenes pequenas
var getImages = function getImages(container) {
  return _toConsumableArray(container.querySelectorAll('img'));
}; //esta se puede reutilizar
//obtener un array de las rutas de las imagenes en version grande


var getLargeImages = function getLargeImages(gallery) {
  return gallery.map(function (el) {
    return el.src;
  }).map(function (el) {
    return el.replace('thumb', 'large');
  });
}; //obtener las descripciones de las imagenes


var getDescriptions = function getDescriptions(gallery) {
  return gallery.map(function (el) {
    return el.alt;
  });
}; //capturar el evento click en la galeria para abrir el lightbox


var openLightboxEvent = function openLightboxEvent(container, gallery, larges, descriptions) {
  container.addEventListener('click', function (e) {
    var el = e.target,
        i = gallery.indexOf(el);

    if (el.tagName === 'IMG') {
      openLightbox(gallery, i, larges, descriptions);
    }
  });
}; //imprimir el overlay del lightbox en el body


var openLightbox = function openLightbox(gallery, i, larges, descriptions) {
  //abrir lightbox al pulsar el parametro image
  var lightboxElement = document.createElement('div');
  lightboxElement.innerHTML = "\n        <div class=\"lightbox-overlay\">\n        <figure class=\"lightbox-container\">\n            <div class=\"close-modal\" >X</div>\n            <img src=\"".concat(larges[i], "\" class=\"lightbox-image\">\n            <figcaption>\n                <p class=\"lightbox-description\">").concat(descriptions[i], "</p>\n                <nav class=\"lightbox-navigation\">\n                    <a href=\"#\" class=\"lightbox-navigation__button prev\">\u276E</a>\n                    <span class=\"lightbox-navigation__counter\">Imagen ").concat(i + 1, " de ").concat(gallery.length, "</span>\n                    <a href=\"#\" class=\"lightbox-navigation__button next\">\u276F</a>\n                </nav>\n            </figcaption>\n        </figure>\n        \n        </div>\n    ");
  lightboxElement.id = 'lightbox';
  document.body.appendChild(lightboxElement);
  closeModal(lightboxElement);
  navigateLightbox(lightboxElement, i, larges, descriptions);
};

var closeModal = function closeModal(modalElement) {
  var closeModal = modalElement.querySelector('.close-modal');
  closeModal.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.removeChild(modalElement);
  });
};

var navigateLightbox = function navigateLightbox(lightboxElement, i, larges, descriptions) {
  var prevButton = lightboxElement.querySelector('.prev'),
      nextButton = lightboxElement.querySelector('.next'),
      image = lightboxElement.querySelector('img'),
      description = lightboxElement.querySelector('p'),
      counter = lightboxElement.querySelector('span'),
      closeButton = lightboxElement.querySelector('.close-modal');
  window.addEventListener('keyup', function (e) {
    console.log(e);
    if (e.key === 'ArrowRight') nextButton.click();
    if (e.key === 'ArrowLeft') prevButton.click();
    if (e.key === 'Escape') closeButton.click();
  });
  lightboxElement.addEventListener('click', function (e) {
    e.preventDefault();
    var target = e.target;

    if (target === prevButton) {
      if (i > 0) {
        image.src = larges[i - 1];
        i--;
      } else {
        image.src = larges[larges.length - 1];
        i = larges.length - 1;
      }
    } else if (target === nextButton) {
      if (i < larges.length - 1) {
        image.src = larges[i + 1];
        i++;
      } else {
        image.src = larges[0];
        i = 0;
      }
    }

    description.textContent = descriptions[i];
    counter.textContent = "Imagen ".concat(i + 1, " de ").concat(larges.length);
  });
};

var lightbox = function lightbox(container) {
  //funcion que ejecuta y une las funciones
  var images = getImages(container),
      larges = getLargeImages(images),
      descriptions = getDescriptions(images);
  openLightboxEvent(container, images, larges, descriptions);
}; //lightbox(document.getElementById('gallery-container'));