var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

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
  var pesoValido = true;
  var alturaValido = true;

  if (peso <= 0 || peso >= 1000) {
    pesoValido = false;
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("dado-invalido");
  }

  if (altura <= 0 || altura >= 3.0) {
    alturaValido = false;
    tdImc.textContent = "Altura Inválida";
    paciente.classList.add("dado-invalido");
  }

  if (pesoValido && alturaValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}

