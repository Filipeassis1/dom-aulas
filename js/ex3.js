const button = document.getElementById('js-btn');
const imagem = document.getElementById('js-img');

// button.classList.add('active');


button.addEventListener('click', ()=>{

    let htmlDoc = document.documentElement;
    htmlDoc.classList.toggle('t-black');
    
    
    if(htmlDoc.classList.contains('t-black')){
        imagem.setAttribute('src', './assets/logo-white.svg')
 
    } else{
        imagem.setAttribute('src', './assets/logo-dark.svg')
    
    }
    

    // button.classList.toggle('active')



})