window.addEventListener('DOMContentLoaded', () => {
    @@include('burger.js')
    @@include('slider.js')
    @@include('postData.js')
    @@include('select.js')

    
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
