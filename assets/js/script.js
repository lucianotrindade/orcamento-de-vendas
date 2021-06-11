const codigo = document.querySelector('.codigo');
const botaoCodigo = document.querySelector('.botao-codigo');
const quantidade = document.querySelector('.quantidade');
const descricao = document.querySelector('.produto');
const valor = document.querySelector('.valor');
const desconto = document.querySelector('.desconto');
const botaoCalcular = document.querySelector('.botao-calcular');
const sub = document.querySelector('.subtotal');



const produto1 = {
    codigo: 123,
    produto: 'Deo Parfum Far Away Royale',
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







botaoCodigo.addEventListener('click', function (e){
    e.preventDefault();

   incluiProduto(codigo.value);
   subTotal(123);
   
});


botaoCalcular.addEventListener('click', function (e){
    e.preventDefault();

  
   subTotal(123);
   
});
