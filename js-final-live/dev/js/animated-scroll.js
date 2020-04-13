console.log(window.scrollY);//estas funciones hacen lomismo
console.log(document.body.scrollTop);//estas funciones hacen lomismo pero esta no me funciono
const getInitialScroll = () => window.scrollY;
const getFinalScroll = element => Math.floor(element.getBoundingClientRect().top +//da una posicion fija del elemento
    getInitialScroll());//getboundingclientrect -> detecta las coodenadas respecto al viewport
const animatedScrollTo = (targetElement, time) => {
    let initialPosition = getInitialScroll(),
        finalPosition = getFinalScroll(targetElement),
        distanceToScroll = finalPosition - initialPosition,
        scrollFragment = distanceToScroll / time;
    animatedScroll(scrollFragment, finalPosition);

};
const animatedScroll = (scrollFragment, finalPosition) => {
    let y = 0;
    let animatedScroll = setInterval(function () {
        //document.body.scrollTop += 10;
        y += scrollFragment;
        window.scrollBy(0, y );
        if (scrollFragment > 0 ) {
            if (window.scrollY > finalPosition - (scrollFragment / 2))
                clearInterval(animatedScroll);
        }else {
            if (window.scrollY < finalPosition - (scrollFragment / 2))
                clearInterval(animatedScroll);
        }

    },1);
};
const animatedScrollEvent = (originElement, time) => {
    if (originElement.tagName === 'A' && originElement.hash !== '' ){//(si es un enlace y si tiene un #)
        let targetElement = document.getElementById(originElement.hash.slice(1));//quita el #()hash
        originElement.addEventListener('click', e => {
            e.preventDefault();
            animatedScrollTo(targetElement, time);
        });

    }
};
const animatedScrollAllLinks = time => {
  let links = document.links;
  for (let link of links){
      animatedScrollEvent(link, time)
  }
};
animatedScrollAllLinks(5200);//
//animatedScrollEvent(document.getElementById('menu'), 500);


//console.log(getFinalScroll(document.getElementById('cap1')));


