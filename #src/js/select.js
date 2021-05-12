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

