// const t02 = document.querySelector('h2');
// const cabecalho = document.getElementById('js-cabecalho')


// t02.innerHTML = t02.innerHTML.toUpperCase();
// console.log(t02.classList.add('nova-classe'))
// t02.addEventListener('click', () => {
//     console.log('clicou')
// })




let produtos = [
    { nome: "Notebook", preco: 2500, categoria: "eletrônicos" },
    { nome: "Camisa", preco: 50, categoria: "vestuário" },
    { nome: "Smartphone", preco: 1800, categoria: "eletrônicos"},
    { nome: "PC", preco: 1800, categoria: "eletrônicos" },
    { nome: "Tenis", preco: 50, categoria: "vestuário" },
  ];

  console.log(produtos.length)
  
  
function categoria(filtrada){

    let produtosFilter = produtos.filter((produto) =>{
        return produto.categoria === filtrada; 
        });

    console.log(typeof produtosFilter)
    
  }

categoria("vestuário");



function carroFavorito(carro){
  if (carro == 'fusca'){
    console.log('voce gosta do fusca');
  } else if (carro == 'gol'){
    console.log('voce gosta do gol');
  } else{
    console.log('voce nao gosta de carro')
  }
}


carroFavorito('gol');

