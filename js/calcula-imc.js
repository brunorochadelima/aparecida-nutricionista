var titulo = document.querySelector(".titulo");

//Selecionar dados
var pacientes = document.querySelectorAll(".paciente");

for (var index = 0; index < pacientes.length; index++) {
  var paciente = pacientes[index];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  // Validação dos dados
  var pesoValido = validaPeso(peso);
  var alturaValido = validaAltura(altura);

  if (!pesoValido) {
    pesoValido = false;
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("dado-invalido");
  }

  if (!validaAltura(altura)) {
    alturaValido = false;
    tdImc.textContent = "Altura Inválida";
    paciente.classList.add("dado-invalido");
  }

  if (pesoValido && alturaValido) {
    tdImc.textContent = calculaImc(peso, altura);
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 1000){
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.00){
    return true;
  } else {
    return false;
  }
}

