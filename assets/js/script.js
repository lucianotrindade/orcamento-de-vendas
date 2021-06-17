let codigo = document.querySelector('.codigo');
let botaoConsultar = document.querySelector('.botao-consultar');
const descricao = document.querySelector('.produto');
let preco = document.querySelector('.valor')
let quantidade = document.querySelector('.quantidade');
let desconto = document.querySelector('.desconto');
let botaoCalcular = document.querySelector('.botao-calcular');
const sub = document.querySelector('.subtotal');
const incluir = document.querySelector('.botao-incluir');
const tabelas = document.querySelector('.tabelas');
const img = document.querySelector('.fa-camera');


/*Feito um objetos com os produtos */
const produto1 = {
    codigo: 123,
    produto: 'DEO PARFUM FAR AWAY ROYALE',
    valor: 42.90,
    produto2: {
        codigo: 456,
        produto: 'KIT RITUAL RENEW',
        valor: 109.90,
    },
    produto3: {
        codigo: 789,
        produto: 'QUARTETO DE SOMBRAS METALICO MATTE 5G',
        valor: 53.99,
    }
}

/*Focando no campo de quantidade */
function focaQuantidade() {
    quantidade.focus();
}

/*Inclui os itens no campo de consulta e calculo */
function incluiProduto(cod) {
    const valor = parseInt(cod); // Estou convertendo String em Number
    if (!valor) alert('O campo código aceita somente números'); // Inpedindo a entrada de String.

    if (valor == 123) {
        descricao.innerText = produto1.produto;

        preco.innerText = produto1.valor;
        incluirItem(produto1.produto);
        incluirItem(produto1.valor);
        quantidade.value = '';
        focaQuantidade();
    } else if (valor == 456) {
        descricao.innerText = produto1.produto2.produto;
        incluirItem(produto1.produto2.produto);
        incluirItem(produto1.produto2.valor);
        preco.innerHTML = produto1.produto2.valor;
        focaQuantidade();
    } else if (valor == 789) {
        descricao.innerText = produto1.produto3.produto;
        incluirItem(produto1.produto3.produto);
        incluirItem(produto1.produto3.valor);
        preco.innerText = produto1.produto3.valor;
        focaQuantidade();
    } else {
        alert('Produto não encontrado!');
        descricao.innerText = ' ';
        preco.innerHTML = ' ';
    }
}

/*Função que faz o calculo do subtotal do produto*/

function calculaSubtotal(valor, desc, qtda) {
    const preco = valor;
    const quantidade = qtda;
    const desconto = (desc / 100);

    const calculaDesconto = preco - (preco * desconto);
    const total = calculaDesconto * quantidade;

    sub.innerHTML = total;

    return total;
}

/* Incluindo na lista de orçamento */


/*Recebe os dados do formulário para depois incluir no campo de orçamento */
let dados = [];

/*Limpa a lista de array existente para nova inclusão ============================*/
function limpaArray(){
    for (let i = 0; i < dados.length; i++) {
        dados.splice(i);
    }
}

function incluirItem(cod) {
    dados.push(cod);
    console.log(dados);
}

/*função que cria TR */
function criaTr() {
    const tr = document.createElement('tr');
    return tr;
}

/*Função que cria tabela */
function criaTabela() {
    const td = document.createElement('td');
    return td;
}


/*Função que vai criar a tabela no orçamento */

function tabelaOrcamento() {
    const td = criaTr();
    tabelas.appendChild(td);

    for (let i = 0; i < dados.length; i++) {
        const tab = criaTabela();
        tab.innerHTML = dados[i];
        td.appendChild(tab);
    }
}

/* Limpa o formulário após a inclusão do item na tabela de orçamento */
function limpaFormulario(){
    codigo.value = '';
    codigo.focus();
    descricao.innerHTML = '';
    preco.innerHTML = '';
    quantidade.value = '';
    desconto.value = ' ';
    sub.innerHTML = ' ';

}

/* mostra imagem de acordo como o código digitado */

function mostraImagem(cod){
    const imagem1 = document.querySelector('.img-1');
    const imagem2 = document.querySelector('.img-2');
    const imagem3 = document.querySelector('.img-3');
    
    const codigo = parseInt(cod);

    codigo === 123 ? imagem1.style.display = "inline-block" : imagem1.style.display = "none"; img.style.display = "inline-block" ;
    codigo === 456 ? imagem2.style.display = "inline-block" : imagem2.style.display = "none";
    codigo === 789 ? imagem3.style.display = "inline-block" : imagem3.style.display = "none" ;

     img.style.display = "none";
}



/*Estou pegando o evento do botão de consultar item */
botaoConsultar.addEventListener('click', function (e) {
    e.preventDefault();
    if (!codigo.value) return;

    incluirItem(codigo.value);
    incluiProduto(codigo.value);
    mostraImagem(codigo.value);

});

/*Pegando o evento do botão calcular */

botaoCalcular.addEventListener('click', function (e) {
    e.preventDefault();
    if (!quantidade.value || !desconto.value) alert("Prencher quantidade e desconto!");

    calculaSubtotal(preco.value, desconto.value, quantidade.value);
    incluirItem(parseInt(quantidade.value));

});

/*Pegando o evento do botão incluir */

incluir.addEventListener('click', function (e) {
    e.preventDefault();

    tabelaOrcamento();
    limpaArray(); 
    limpaFormulario();
    mostraImagem();
    img.style.display = "flex";
    
});

/*Parando o evento da tecla enter e quando precionada foca no campo desconto.*/
quantidade.addEventListener('keypress', function(e){
    if(e.keyCode === 13) e.preventDefault();
    desconto.focus();
});

/* Estou parando o evendo do enter no campo desconto */
desconto.addEventListener('keypress', function(e){
    if(e.keyCode === 13) e.preventDefault();
});




