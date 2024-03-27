let led = "ligar";

const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "ligar") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/acesa.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada acesa.";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/apagada.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada apagada.";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};

const gerarImagem = () => {
  let qtdimagem = document.getElementById("inQtdImg").value; //valor informado pelo user
  console.log(qtdimagem);
  document.getElementById(
    "canvas"
  ).innerHTML = `<img class ="imagens" src="./img/acesa.jpg" alt="">`;

  for (let i = 1; i <= qtdimagem; i++) {
    canvas.innerHTML += `<img class ="imagens" id="lampada" src="./img/acesa.jpg" alt="lampada">`;
  }
};
// const lampada = () => {

// };
calcular = () => {
  let inValorPedido = document.getElementById("inValorPedido");
  let inPercDesc = document.getElementById("inPercDesc");
  let inValDesc = document.getElementById("inValDesc");
  let inValFinal = document.getElementById("inValFinal");

  if (inValorPedido.value >= 2000) {
    inPercDesc.value = 1.5;
    inValDesc.value = inValorPedido.value * 0.015;
    inValFinal.value = inValorPedido.value - inValDesc.value;
  } else if (inValorPedido.value >= 1500) {
    inPercDesc.value = 1.0;
    inValDesc.value = inValorPedido.value * 0.01;
    inValFinal.value = inValorPedido.value - inValDesc.value;
  } else if (inValorPedido.value >= 1000) {
    inPercDesc.value = 0.8;
    inValDesc.value = inValorPedido.value * 0.008;
    inValFinal.value = inValorPedido.value - inValDesc.value;
  } else if (inValorPedido.value >= 500) {
    inPercDesc.value = 0.5;
    inValDesc.value = inValorPedido.value * 0.005;
    inValFinal.value = inValorPedido.value - inValDesc.value;
  }
};

validaForm = () => {
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inData = document.getElementById("inData").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inVal = document.getElementById("inVal").value;
  let mensagemErro = document.getElementById("mensagem-erro");

  mensagemErro.innerText = "";

  inData == "" && (mensagemErro.innerHTML += " Data invalida <br>");
  inCli == "" && (mensagemErro.innerHTML += "nome do cliente invalido <br>");
  inCli.length <3 && (mensagemErro.innerHTML += "nome do cliente com tamanho invalido <br>");
  inFone == "" && (mensagemErro.innerHTML += "telefone invalido <br>");
  inMail == "" && (mensagemErro.innerHTML += "E-mail invalido <br>");
  inMail.length <6 && (mensagemErro.innerHTML += "E-mail sem tamanho valido <br>");
  inProd == "" && (mensagemErro.innerHTML += "produto invalido <br>");
  inProd.length <6 && (mensagemErro.innerHTML += "quantidade de produto invalido <br>");
  inQtd == "" && (mensagemErro.innerHTML += "quantidade invalida <br>");
  inQtd.length <0 && (mensagemErro.innerHTML += "quantidade negativa invalida <br>");
  inVal == "" && (mensagemErro.innerHTML += "valor invalido <br>");
  inVal.length <0 && (mensagemErro.innerHTML += "valor negativo invalido <br>");


    // mostrar | ocultar erro
    mensagemErro.innerText == ""
    ? ((mensagemErro.style.display = "none"), (mensagemErro.innerText = "enviado!"))
    : (mensagemErro.style.display = "block");


  mensagemErro.innerText == "enviado!" &&
    ((mensagemErro.style.display = "block"),
    (mensagemErro.innerText = "Formulário enviado com sucesso!"),
    (mensagemErro.className = "verde"));

};
