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
