//176

const titulo2 = document.querySelector('h2');


titulo2.classList.add('nova-classe');

// selecionando elementos

const header = document.getElementById('js-cabecalho');


const allDrops = document.querySelectorAll('.dropdown');

allDrops.forEach((item, index) => {
    item.addEventListener('click', () =>{
        console.log('item:' + index)
    })
})