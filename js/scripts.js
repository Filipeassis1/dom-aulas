const t02 = document.querySelector('h2');
const cabecalho = document.getElementById('js-cabecalho')


t02.innerHTML = t02.innerHTML.toUpperCase();
console.log(t02.classList.add('nova-classe'))
t02.addEventListener('click', () => {
    console.log('clicou')
})






