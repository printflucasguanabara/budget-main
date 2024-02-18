document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)

document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas` 
    atualizarPreco()
})
console.log('test')


function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    

    let preco = qtde * 100;
    if (temJS) preco *= 1.1
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`

}

/*
formatar preço como moeda ---
function formatarPreco(preco) {
    return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
--------------


function calcularPrecoBase(quantidade) {
    return quantidade * 100;
}


------------------------------

function atualizarPreco() {
  const qtde = document.querySelector("#qtde").value;
  const temJS = document.querySelector("#js").checked;
  const incluiLayout = document.querySelector("#layout-sim").checked;
  const prazo = document.querySelector("#prazo").value;

  let preco = qtde * 100;
  if (temJS) preco *= 1.1;
  if (incluiLayout) preco += 500;
  const taxaUrgencia = 1 - prazo * 0.1;
  preco *= 1 + taxaUrgencia;

  document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`;
}

document.querySelector("#qtde").addEventListener("change", atualizarPreco);
document.querySelector("#js").addEventListener("change", atualizarPreco);
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco);
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco);

document.querySelector("#prazo").addEventListener("change", function () {
  const prazo = document.querySelector("#prazo").value;
  document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`;
  atualizarPreco();
});

atualizarPreco();





*/
