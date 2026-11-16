//Recuperar os valores Ingresso, quantidade 
function comprar() {
  let ingresso =document.getElementById('tipo-ingresso');  
  let quantidade = parseInt(document.getElementById('qtd').value);

//Subtraia da quantidade de ingressos disponíveis e atualize o numero de ingressos 
if (ingresso.value == 'pista'){
    comprarPista(quantidade);
}else if (ingresso.value == 'superior'){
    comprarSuperior(quantidade);
} else if (ingresso.value == 'inferior'){
    comprarInferior(quantidade);
}
}
    
function comprarPista(quantidade){
let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
if (quantidade > qtdPista) {
    alert('Quantidade indisponivel para tipo pista');
} else {
    qtdPista = qtdPista - quantidade;
   document.getElementById('qtd-pista').textContent = qtdPista;
    alert('Compra realizada com sucesso !');
}
}

function comprarSuperior(quantidade){
let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
if (quantidade > qtdSuperior) {
    alert('Quantidade indisponivel para tipo Cadeira Superior');
} else {
    qtdSuperior = qtdSuperior - quantidade;
   document.getElementById('qtd-superior').textContent = qtdSuperior;
    alert('Compra realizada com sucesso !');
}
}

function comprarInferior(quantidade){
let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
if (quantidade > qtdInferior) {
    alert('Quantidade indisponivel para tipo Cadeira Inferior');
} else {
    qtdInferior = qtdInferior - quantidade;
   document.getElementById('qtd-inferior').textContent = qtdInferior;
    alert('Compra realizada com sucesso !');
}
}








//Subtraia da quantidade de ingressos disponíveis e atualize o numero de ingressos 
//Se nao tiver Disponivel enviar alert dizendo que não tem ingressos disponíveis