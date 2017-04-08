let submit = document.getElementById("submit");
const api = `https://api.fixer.io/latest?base=`;


submit.addEventListener('click', (e) => {
  e.preventDefault();
  let base = document.getElementById("base").value
  // let curr = document.getElementById("curr").value
  let amount = document.getElementById("amount").value
  let answer= document.getElementById("answer")
  let url= api+base
  console.log(url)
   fetch(url)
    .then((response) => response.json())
    .then(function(data){

    		answer.innerHTML= data.rates.INR*amount
    })
    .catch((e) => console.log('ERROR!'))
})

//BYE!