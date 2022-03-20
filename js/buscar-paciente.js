var botaoAdicionar = document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  xhr.send();
  xhr.addEventListener("load", function () {
    console.log(xhr.responseText);
  });
});
