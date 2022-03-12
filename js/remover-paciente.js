var pacientes = document.querySelectorAll(".paciente")

pacientes.forEach(function(item){
  item.addEventListener("dblclick", function(){
    this.remove()
  })
})



