var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  // extrair valores do formulário
  var paciente = extrairValoresFormulario(form);

  //Montar TR paciente
  var pacienteTr = montaTr(paciente);

  //Validar dados do pacientes
  var erros = validaDados(paciente);
  if (dadosInvalidos.length > 0) {
    exibirMensagenErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente)

  form.reset();

  //limpar erros após dados inseridos com sucesso
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  // Colocar TR paciente como filho da tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function extrairValoresFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value, //colocar virgula no final de cada propriedade do objeto, exceto no último
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaDados(paciente) {
  dadosInvalidos = [];

  if (!validaPeso(paciente.peso)) {
    dadosInvalidos.push("Peso inválido");
  }

  if (!validaAltura(paciente.altura)) {
    dadosInvalidos.push("Altura inválida");
  }

  if (paciente.nome.length == 0) {
    dadosInvalidos.push("O nome não pode ficar em branco");
  }

  if (paciente.peso.length == 0) {
    dadosInvalidos.push("O peso não pode ficar em branco");
  }

  if (paciente.altura.length == 0) {
    dadosInvalidos.push("A altura não pode ficar em branco");
  }

  return dadosInvalidos;
}

function exibirMensagenErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  dadosInvalidos.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
