const codigo = document.querySelector('.codigo');
const botaoConsultar = document.querySelector('.botao-consultar');
const quantidade = document.querySelector('.quantidade');
const descricao = document.querySelector('.produto');
const preco = document.querySelector('.valor');
const desconto = document.querySelector('.desconto');
const botaoCalcular = document.querySelector('.botao-calcular');
const sub = document.querySelector('.subtotal');


/*Feito um objetos com os produtos */
const produto1 = {
    codigo: 123,
    produto: 'DEO PARFUM FAR AWAY ROYALE',
    valor: 42.90,
    produto2: {
        codigo: 456 ,
        produto: 'KIT RITUAL RENEW',
        valor: 109.90,  
    },
    produto3: {
        codigo: 789,
        produto: 'QUARTETO DE SOMBRAS METALICO MATTE 5G',
        valor: 53.99, 
    }
}

/*Inclui os itens no campo de consulta e calculo */
function incluiProduto(cod){
    const valor = parseInt(cod); // Estou convertendo String em Number
    if(!valor) alert('O campo código aceita somente números'); // Inpedindo a entrada de //String.

     if(valor == 123){
         if(valor !== 123) alert('Produto não encontrado');
        descricao.innerText = produto1.produto;
        preco.innerText = produto1.valor;
    }
    if(valor == 456){
        descricao.innerText = produto1.produto2.produto;
        preco.innerHTML = produto1.produto2.valor;
    }
    if(valor == 789){
        descricao.innerText = produto1.produto3.produto;
        preco.innerText = produto1.produto3.valor;
    }
}


/*Estou pegando o evento do botão de consultar item */
botaoConsultar.addEventListener('click', function (e){
    e.preventDefault();
    console.log(codigo.value);
    if(!codigo.value) return;

   incluiProduto(codigo.value);
   console.log(codigo.value)
     
});



