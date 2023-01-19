const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "03-01", "01-06", "01-08", "01-09","01-10"],
  water: ["01-01", "01-02", "01-03","01-08", "01-11","01-12"],
  food: ["01-06", "01-07", "01-08","01-09", "01-19","01-20"],
  read: ["01-03", "01-05", "01-06","01-10", "01-15","01-12"],
  gym: ["02-02", "02-02", "02-06","02-08", "02-09","02-10"],

}

nlwSetup.setData(data)
nlwSetup.load() 