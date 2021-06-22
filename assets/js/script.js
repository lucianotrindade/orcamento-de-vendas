const formulario = document.querySelector('.container-formulario');
const codigo = document.querySelector('.codigo');
const botaoConsultar = document.querySelector('.botao-consultar');
const descricao = document.querySelector('.produto');
const preco = document.querySelector('.valor')
const quantidade = document.querySelector('.quantidade');
const desconto = document.querySelector('.desconto');
const botaoCalcular = document.querySelector('.botao-calcular');
const sub = document.querySelector('.subtotal');
const incluir = document.querySelector('.botao-incluir');
const tabelas = document.querySelector('.tabelas');
const img = document.querySelector('.fa-camera');
const valorTotal = document.querySelector('.valor-total-pedido');
const icone = document.querySelector('.fa-trash-alt');
const td = document.querySelector('.lista');


/*1- Criei um objeto produto que armazena código, produto e valor */
const produto1 = {
    codigo: 123,
    produto: 'DEO PARFUM FAR AWAY ROYALE',
    valor: 42.90.toFixed(2),
    produto2: {
        codigo: 456,
        produto: 'KIT RITUAL RENEW',
        valor: 109.90.toFixed(2),
    },
    produto3: {
        codigo: 789,
        produto: 'QUARTETO DE SOMBRAS METALICO MATTE 5G',
        valor: 53.99,
    }
}

/*2-Após incluir o código e consultar essa função mostra o produto e o valor no campo de pesquisa */
function incluiProduto(cod) {
    const valor = parseInt(cod); // Estou convertendo String em Number
    if (!valor) alert('O campo código aceita somente números'); // Impede a entrada de String.

    if (valor == 123) {
        descricao.innerText = produto1.produto;
        preco.innerText = produto1.valor;
        incluirItem(produto1.produto);
        quantidade.value = '';
        focaQuantidade();
    } else if (valor == 456) {
        descricao.innerText = produto1.produto2.produto;
        incluirItem(produto1.produto2.produto);
        //incluirItem(produto1.produto2.valor);
        preco.innerHTML = produto1.produto2.valor;
        focaQuantidade();
    } else if (valor == 789) {
        descricao.innerText = produto1.produto3.produto;
        incluirItem(produto1.produto3.produto);
        //incluirItem(produto1.produto3.valor);
        preco.innerText = produto1.produto3.valor;
        focaQuantidade();
    } else {
      alert('Produto não encontrado!'); 
       descricao.innerText = '';
       preco.innerHTML = '';
    }
   
}

/*3-Essa função após consultar o produto ela deixa o ponteiro do mouse no campo de quantidade, Assim mostra ao usuário qual é o próximo campo a ser preenchido */
function focaQuantidade() {
    quantidade.focus();
}

/*4-Apos imncluir a quantidade e o desconto, essa função faz o calculo e imprime o valor do resultado no campo SUBTOTAL*/
function calculaSubtotal(valor, desc, qtda) {
    const preco = valor;
    const quant = qtda;
    const desconto = (desc / 100);

    const calculaDesconto = preco - (preco * desconto);
    const total = parseInt(calculaDesconto * quant);

    incluirItem(calculaDesconto.toFixed(2));
    incluirItem(parseInt(quantidade.value));
    incluirItem(total.toFixed(2));

    

    sub.innerHTML = total.toFixed(2);

    return total.toFixed(2);
}

/*4-Esta função faz uma consulta no código e mostra a imagem do produto no campo de imagem */
function mostraImagem(cod) {
    const imagem1 = document.querySelector('.img-1');
    const imagem2 = document.querySelector('.img-2');
    const imagem3 = document.querySelector('.img-3');

    const codigo = parseInt(cod);

    codigo === 123 ? imagem1.style.display = "inline-block" : imagem1.style.display = "none"; img.style.display = "inline-block";
    codigo === 456 ? imagem2.style.display = "inline-block" : imagem2.style.display = "none";
    codigo === 789 ? imagem3.style.display = "inline-block" : imagem3.style.display = "none";

    img.style.display = "none";
}

/*5-Este array recebe os dados para inclução no campo do orçameto*/
let dados = [];

/*6- Esta função recebe um valor e faz a inclusão do mesmo no Array */
function incluirItem(cod) {
    dados.push(cod);
}

/*6- Limpa a lista de array existente para nova inclusão ============================*/
function limpaArray() {
    for (let i = 0; i < dados.length; i++) {
        dados.splice(i);
    }
}

/*7- função que cria a tabela <tr> */
function criaTr() {
    const tr = document.createElement('tr');
    return tr;
}

/*8- Função que cria tabela <td>*/
function criaTabela() {
    const td = document.createElement('td');
    return td;
}

/*Esta função cria um icone dentra da tabela de orçamento */
function criaIcone() {
    const i = '<i class="far fa-trash-alt"></i>';
    return i;
}

/*8- Esta função vai pegar a informação que esta no array dados e vai coloca-los em forma de tabela na parte do orçamento.*/

function tabelaOrcamento() {
    const td = criaTr();
    td.setAttribute('class','lista')
    tabelas.appendChild(td);
    
    for (let i = 0; i < dados.length; i++) {
        const tab = criaTabela();
        tab.innerHTML = dados[i];
        tab.setAttribute('class', 'lista');
        td.appendChild(tab);
    }
   
}

/*9- Limpa o formulário após a inclusão do item na tabela de orçamento */
function limpaFormulario() {
    codigo.value = '';
    codigo.focus();
    descricao.innerHTML = '';
    preco.innerHTML = '';
    quantidade.value = '';
    desconto.value = '';
    sub.innerHTML = '';
}

function somarTotal(){
    
}

/*10- faz a soma da venda dos itens para coloca-los no total do pedido */
let total = 0;

/*11- Esta função pega o valor do total e soma mais o valor da venda, para fazer o total do pedido*/
function totalPedido(valor){
    total += Number(valor);
}

function totalPedidoSubtracao(valor){
    total -= Number(valor);
}

/*12- faz a inclução do valor total no campo de orçamento */
function totalPedidoFinal(){
    valorTotal.innerHTML = total.toFixed(2);
}

/*Função que exclui um item da lista de orçamento. */
function removeItem(){
    const tr = document.querySelector('.lista');
    tr.remove();
   
    console.log(td);
}

/*14- Esta função para o evento de enviar o formulário  */
formulario.addEventListener('submit', function(e){
    e.preventDefault();
});

/*12- Estou pegando o evento do botão de consultar item */
botaoConsultar.addEventListener('click', function (e) {
    e.preventDefault();
    if (!codigo.value) return;

    incluirItem(codigo.value);
    incluiProduto(codigo.value);
    mostraImagem(codigo.value);

});

/*13- Pegando o evento do botão calcular */
botaoCalcular.addEventListener('click', function (e) {
    e.preventDefault();
    if (!quantidade.value || !desconto.value) return alert("Prencher quantidade e desconto!") ;

    calculaSubtotal(preco.value, desconto.value, quantidade.value);
    //incluirItem(parseInt(quantidade.value));
    incluirItem(criaIcone());
});

/*15- Pegando o evento do botão incluir */
incluir.addEventListener('click', function (e) {
    e.preventDefault();

    tabelaOrcamento();
    totalPedido(dados[4]);
    totalPedidoFinal();
    limpaArray();
    limpaFormulario();
    mostraImagem();
    img.style.display = "flex";
});


/*16- Parando o evento da tecla enter e quando precionada foca no campo desconto.*/
quantidade.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) e.preventDefault();
    desconto.focus();
});

/*17- Estou parando o evendo do enter no campo desconto */
desconto.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) e.preventDefault();
});


document.addEventListener('click', function(e){
    const elemento = e.target;
    if(elemento.classList.contains('fa-trash-alt')) {
    removeItem();
    }
});







