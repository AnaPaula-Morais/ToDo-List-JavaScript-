function enviar() {
  //pega o texto digitado
  var input = document.getElementById("incluirTarefa");
  var textoDigitado = input.value;

  //cria elemento com texto digitado
  var h2 = document.createElement("h2");
  h2.innerText = textoDigitado;

  //adiciona o texto digitado na div
  var div = document.getElementById("tarefas");
  div.appendChild(h2);

  //limpar input
  input.value = "";

}

var input = document.getElementById("incluirTarefa");
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    enviar();
  }
});




