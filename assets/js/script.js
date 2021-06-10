const codigo = document.querySelector('.codigo');
const botao1 = document.querySelector('.botao');
const quantidade = document.querySelector('.quantidade');
const descricao = document.querySelector('.produto');
const valor = document.querySelector('.valor');
const desconto = document.querySelector('.desconto');
const botao2 = document.querySelector('.botao2');
const sub = document.querySelector('.subtotal');



const produto1 = {
    codigo: 123,
    produto: 'Fita adesiva',
    valor: 42.90,
    produto2: {
        codigo: 456 ,
        produto: 'Tinta Automotiva',
        valor: 109.90,  
    },
    produto3: {
        codigo: 789,
        produto: 'pincel para pintura',
        valor: 22.90, 

    }
}


function incluiProduto(cod){
    if(cod == 123){
        descricao.innerText = produto1.produto;
        valor.innerText = produto1.valor;
        
    }
}

function subTotal(cod1){
    if(cod1 == 123){
       const resultado = produto1.valor * quantidade.value * (desconto.value/100);
       sub.innerHTML = resultado;

    }

}







botao1.addEventListener('click', function (e){
    e.preventDefault();

   incluiProduto(codigo.value);
   subTotal(123);
   
});


botao2.addEventListener('click', function (e){
    e.preventDefault();

  
   subTotal(123);
   
});
