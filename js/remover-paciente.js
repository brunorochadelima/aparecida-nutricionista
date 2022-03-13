var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", function(event) {
event.target.parentNode.classList.add("fadeout") 

setTimeout(function() {
  event.target.parentNode.remove() //remover o pai(parentNode) do elemento alvo do click(target)
},500)
})




