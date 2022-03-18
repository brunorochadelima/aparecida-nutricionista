var pacientes = document.querySelectorAll(".paciente");

buscarPaciente = document.querySelector("#buscar_paciente");
buscarPaciente.addEventListener("input", function () {
  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;

      if (nome != this.value) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }
  } else {
    for (var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel")
    }
  }
});

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
}
