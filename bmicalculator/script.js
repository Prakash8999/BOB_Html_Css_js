// const form = document.querySelector('form')

// form.addEventListener('submit', function (e) {
// 	e.preventDefault()
// 	const height = parseInt(document.querySelector('#height').value)
// 	const weight = parseInt(document.querySelector('#weight').value)
// 	let printResult = document.querySelector('#result')
// 	let result = (weight/ ((height/100)*(height/100))).toFixed(2)
// 	printResult.innerHTML=`<p>${result} </p>`
// })



const form = document.querySelector('form')


form.addEventListener('submit', function(e){
e.preventDefault()
let height = parseInt(document.querySelector('#height').value)
let weight = parseInt(document.querySelector('#weight').value)
let printresult = document.querySelector('#result')


let result = (weight/ ((height/100)*(height/100))).toFixed(2)
printresult.textContent = result

})