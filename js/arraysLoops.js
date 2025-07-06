//array

let carro = ['fusca', 'brasilia','gol']

carro.push('civic')


// console.log(carro[0]);


// repeticao


// for ( i = 0; i <= 10; i++){
//     console.log(i)
// }


// for (var i = 0; i < carro.length; i++){
//     console.log(carro[i]);

//     if(carro[i] === 'brasilia'){
//         break;
//     }
// }


carro.forEach(function(item, index, array){
    console.log(item, index)
})