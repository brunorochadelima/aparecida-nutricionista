var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Primeiro Paciente
var paciente = document.querySelector("#primeiroPaciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = document.querySelector(".info-imc");

// Validação dos dados
var pesoValido = true;
var alturaValido = true;

if (peso <= 0 || peso >= 1000) {
  pesoValido = false;
  tdImc.textContent = "Peso Inválido";
}

if (altura <= 0 || altura >= 3.0) {
  alturaValido = false;
  tdImc.textContent = "Altura Inválido";
}

if (pesoValido && alturaValido) {
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
}


