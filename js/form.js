var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  // extrair valores do formulário
  var form = document.querySelector("#form-adiciona");
  extrairValoresFormulario(form);

  // Cria a tr e td do paciente
  var pacienteTr = document.createElement("tr");
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = calculaImc(peso, altura);

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  // Adiciona o paciente na tabela
  tabelaPacientes = document.querySelector("#tabela-pacientes");
  tabelaPacientes.appendChild(pacienteTr);
});


function extrairValoresFormulario(form) {

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value, //colocar virgula no final de cada propriedade do objeto, exceto no último
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  console.log(paciente);
}
