

function screenChange(){
    const wrapper = document.querySelector('.slider__wrapper'),
      sliderInner = document.querySelector('.slider__inner'),
      sliderItem = document.querySelectorAll('.slider__item'),
      prev = document.querySelector('.slider__prev'),
      next = document.querySelector('.slider__next'),
      total = document.querySelector('.slider__total'),
      current = document.querySelector('.slider__current'),
      width = window.getComputedStyle(wrapper).width;


let offset = 0,
    slideIndex = 1;     

if(sliderItem.length < 10){
    total.textContent = `${slideIndex}`;
    current.textContent = `/${sliderItem.length}`;
}

sliderInner.style.width = 100 * sliderItem.length + '%';
    sliderItem.forEach( slide => {
    slide.style.width = width;
    });

next.addEventListener('click', () => {
    if( offset == +width.match(/\d/ig).join('') * (sliderItem.length - 1)){
        offset = 0;
    } else {
        offset += +width.match(/\d/ig).join('');
    }
    sliderInner.style.transform = `translateX(-${offset}px)`;

    if( slideIndex == sliderItem.length) {
        slideIndex = 1;    
    } else {
        slideIndex++;
    }
    total.textContent = `${slideIndex}`;
});

prev.addEventListener('click', () => {
    if( offset == 0){
        offset = +width.match(/\d/ig).join('') * (sliderItem.length - 1);
    } else {
        offset -= +width.match(/\d/ig).join('');
    }
    sliderInner.style.transform = `translateX(-${offset}px)`;

    if( slideIndex == 1) {
        slideIndex = sliderItem.length;    
    } else {
        slideIndex--;
    }
    total.textContent = `${slideIndex}`;
});
}

screenChange();

