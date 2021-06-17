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

function limpaFormulario(){
    codigo.value = '';
    codigo.focus();
    descricao.innerHTML = '';
    preco.innerHTML = '';
    quantidade.value = '';
    desconto.value = ' ';
    sub.innerHTML = ' ';

}


/*Estou pegando o evento do botão de consultar item */
botaoConsultar.addEventListener('click', function (e) {
    e.preventDefault();
    if (!codigo.value) return;

    incluirItem(codigo.value)
    incluiProduto(codigo.value);

    console.log(codigo.value)
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




