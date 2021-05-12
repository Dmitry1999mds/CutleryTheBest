window.addEventListener('DOMContentLoaded', () => {
    
    const menuBurger = document.querySelector('.menu__burger'),
          menubtn = document.querySelectorAll('.menu__btn'),
          btnSpan = document.querySelectorAll('span');
          
        
    menubtn.forEach( item => {
        item.addEventListener('click', () => {
            if( menuBurger.classList.contains('active')){
                menuBurger.classList.remove('active');
                showoverlay();
                btnSpan.forEach(item => {
                    item.classList.remove('rotate');
                });
            } else {
                    menuBurger.classList.add('active');
                    btnSpan.forEach(item => {
                        item.classList.add('rotate');
                    });
                    showoverlay();
            }
            
            
        });
    });

    function showoverlay(){
        if(document.documentElement.clientWidth <= 750 && menuBurger.classList.contains('active') ){
            document.body.style.overflow = 'hidden';
            menuBurger.style.overflow = 'auto';
        } else {
            document.body.style.overflow = '';
        }
    }


    

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


    'use strict'
/* const form = document.querySelector('form');

bindPostData(form)

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
    });

    return  await res.json(); 
};

function bindPostData(form){
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const object = {}
        formData.forEach(function(value, key){
            object[key] = value;
        });

        postData('server.php', JSON.stringify(object) )
        .then(data => console.log(data))
          .catch(() => console.log('Error 432'))
          .finaly( () => form.reset());
    });
} */

const form = document.querySelector('form');

form.addEventListener('submit', formSend);

async function formSend(e){
    e.preventDefault();

    let error = formValidete(form);  
    
    if(error === 0){

    } else {
        alert('Please fill in all fields')
    }
}

function formValidete(form){
    let error = 0;
    let forReg = document.querySelectorAll('._reg');
    for (let i = 0; i < forReg.length; i++){
        const input = forReg[i];

        formRemoveError(input);


        if( input.classList.contains('_email')){
            if(emailTest(input)){
                console.log(input.value);
                formAddError(input);
                error++;
            }
        } else if(input.getAttribute('type') === 'checkbox' && input.checked === false){
            formAddError(input);
            error++;
        } else {
            if(input.value === ''){
                formAddError(input);
                error++;
            }
        }
    }
    return error;
}

function formAddError(input){
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}

function formRemoveError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error'); 
}

function emailTest(input) {
    return !/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(input.value);
  }


    const images = document.querySelectorAll('.form__image');

    images.forEach( item => {
        item.addEventListener('click', (e) =>{
            let parent = e.target.closest('.form__image');
            console.log(parent);

           if( parent.classList.contains('choose')){
                parent.classList.remove('choose');
           } else {
               images.forEach( item => {
                   item.classList.remove('choose');
               })
               parent.classList.add('choose');
           }
        });
    });

    function select(){
    let selectHeader = document.querySelector('.form__select-header');
    let selectItem = document.querySelectorAll('.form__select-item');
    

   
        selectHeader.addEventListener('click', () => {
            selectHeader.parentElement.classList.toggle('is-active');
        });

        selectItem.forEach( item => {
            item.addEventListener('click', selectChoose);
        });

        function selectChoose(){
            let text = this.innerText,
                select = this.closest('.form__select'),
                theSelect = document.querySelector('select'),
                currentText = select.querySelector('.form___select-current');

            currentText.innerText = text;
            theSelect.value = text;

            select.classList.remove('is-active');
            console.log(theSelect.value);
        }
  

}

function input(){
    const labels = document.querySelectorAll('.form__item label');

    labels.forEach( item => {
        item.style.display = 'none';
    });
}


input();
select()



    
    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        
        testWebP(function (support) {
        
        if (support == true) {
        document.querySelector('body').classList.add('webp');
        }else{
        document.querySelector('body').classList.add('no-webp');
        }
        });// проверяет есть ли у браузера поддержка webp формата
    
    window.addEventListener(`resize`, () => {
        resize();
        screenChange();
      });
    
    function resize(){
        const h1 = document.querySelector('.main__title');
        if(document.documentElement.clientWidth <= 1100){
            h1.innerHTML = `<h1>Cutlery</h1>`;
        } else {
            h1.innerHTML = `<h1>Cut<div> -lery</div></h1>`
        }
    }
    const secondPair = document.querySelector('.reviews__secondPair'),
          showBtn = document.querySelector('.show_btn'),
          hideBtn = document.querySelector('.hide_btn');

    showBtn.addEventListener('click', () => {
        secondPair.classList.add('add_comments');
        hideBtn.style.display = 'block';
        showBtn.style.display = 'none';
    });

    hideBtn.addEventListener('click', () => {
        secondPair.classList.remove('add_comments');
        hideBtn.style.display = 'none';
        showBtn.style.display = 'block';
    });

    //accordion
    const accordionItem = document.querySelectorAll('.accordion__item');
    const answer = document.querySelectorAll('.accordion__answer');
    const answerP = document.querySelectorAll('.accordion__answer p');

    
    
    accordionItem.forEach((item, i) => {
       
        item.addEventListener('click', () => {

            if(accordionItem[i].classList.contains('active')){
                accordionItem[i].classList.toggle('active');  
                answer[i].style.height = ' 0';            
            } else {
                accordionItem.forEach(child => {
                    child.classList.remove('active');
                });
                answer.forEach(child => {
                    child.style.height = '0';
                });

                accordionItem[i].classList.toggle('active');
                answer[i].style.height = `${window.getComputedStyle(answerP[i]).height}`;          
            }   
        });
    });
    resize();
});
