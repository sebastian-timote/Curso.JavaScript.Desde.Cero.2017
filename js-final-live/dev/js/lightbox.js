// al hacer clic en una imagen se abra su version grande
    //se abre un overlay
    // ese overlay debe poder cerrarse
//al abrirse la version grande debe tener lo siguiente
    //descripcion de la imagen (que se tomara del atributo alt)
    //navegacion entre la immagen siguiente y la anterior
//let images = document.querySelectorAll('.gallery-container img');//esta hace lo mismo que la linea8
//obtener la galeria de imagenes pequenas
const getImages = container => [...container.querySelectorAll('img')];//esta se puede reutilizar
//obtener un array de las rutas de las imagenes en version grande
const getLargeImages = gallery =>
            gallery.map(el => el.src)
                   .map(el => el.replace('thumb', 'large'));
//obtener las descripciones de las imagenes
const getDescriptions = gallery => gallery.map(el => el.alt);
//capturar el evento click en la galeria para abrir el lightbox
const openLightboxEvent = (container, gallery,larges, descriptions) => {
  container.addEventListener('click', e => {
      let el = e.target,
          i = gallery.indexOf(el);
      if(el.tagName === 'IMG'){
          openLightbox(gallery, i, larges, descriptions);
      }
  });
};
//imprimir el overlay del lightbox en el body
let openLightbox = (gallery, i, larges, descriptions) => {
    //abrir lightbox al pulsar el parametro image
    let lightboxElement = document.createElement('div');
    lightboxElement.innerHTML = `
        <div class="lightbox-overlay">
        <figure class="lightbox-container">
            <div class="close-modal" >X</div>
            <img src="${larges[i]}" class="lightbox-image">
            <figcaption>
                <p class="lightbox-description">${descriptions[i]}</p>
                <nav class="lightbox-navigation">
                    <a href="#" class="lightbox-navigation__button prev">❮</a>
                    <span class="lightbox-navigation__counter">Imagen ${i + 1} de ${gallery.length}</span>
                    <a href="#" class="lightbox-navigation__button next">❯</a>
                </nav>
            </figcaption>
        </figure>
        
        </div>
    `;
    lightboxElement.id = 'lightbox';
    document.body.appendChild(lightboxElement);
    closeModal(lightboxElement);
    navigateLightbox(lightboxElement,i,larges,descriptions);
};
const closeModal = modalElement => {
    let closeModal = modalElement.querySelector('.close-modal');
    closeModal.addEventListener('click', e => {
       e.preventDefault();
        document.body.removeChild(modalElement);
    });
};

const navigateLightbox = (lightboxElement,i,larges,descriptions) => {
    let prevButton  = lightboxElement.querySelector('.prev'),
        nextButton  = lightboxElement.querySelector('.next'),
        image       = lightboxElement.querySelector('img'),
        description = lightboxElement.querySelector('p'),
        counter     = lightboxElement.querySelector('span'),
        closeButton = lightboxElement.querySelector('.close-modal');
    window.addEventListener('keyup', e => {
        if (e.key === 'ArrowRight') nextButton.click();
        if (e.key === 'ArrowLeft') prevButton.click();
        if (e.key === 'Escape') closeButton.click();
    });
    lightboxElement.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target;
        if (target === prevButton){
            if (i > 0){
                image.src = larges[i - 1];
                i--;
            }else {
                image.src = larges[larges.length - 1];
                i = larges.length - 1;
            }

        }else if (target === nextButton){
            if (i < larges.length - 1 ){
                image.src = larges[i + 1];
                i++;
            }else{
                image.src = larges[0];
                i = 0;
            }

        }
        description.textContent = descriptions[i];
        counter.textContent = `Imagen ${i + 1} de ${larges.length}`;
    })
};

const lightbox = container => {//funcion que ejecuta y une las funciones
    let images = getImages(container),
        larges = getLargeImages(images),
        descriptions = getDescriptions(images);
    openLightboxEvent(container, images, larges, descriptions);
};
//lightbox(document.getElementById('gallery-container'));