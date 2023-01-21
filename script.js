const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")


button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso\u{1F4F6}")
    return
  }

  alert("Adicionado com sucesso\u{2705}")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) 
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //se usar em outro navegador 

nlwSetup.setData(data)
nlwSetup.load()


