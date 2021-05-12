
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

