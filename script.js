function enviar() {
  //pega o texto digitado
  var input = document.getElementById("incluirTarefa");
  var textoDigitado = input.value;
 
  //cria elemento com texto digitado
  var td = document.createElement("td");
  td.innerText = textoDigitado;
  var tr = document.createElement("tr");
  tr.appendChild(td);

  //adiciona o texto digitado na tabela
  var  tbody = document.getElementById("tbody");
  tbody.appendChild(tr);

  //limpar input
  input.value = "";

}

var input = document.getElementById("incluirTarefa");
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    enviar();
  }
});






