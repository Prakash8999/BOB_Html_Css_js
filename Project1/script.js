// const buttons = document.querySelectorAll('.button')
// console.log(buttons);
// const body = document.querySelector('body')
// buttons.forEach(function(button){
// button.addEventListener('click', function(e){
// 	console.log(e);
// 	console.log(e.target);
// 	if(e.target.id =='yellow'){
// 		body.style.backgroundColor = 'yellow'
// 	}
// 	if(e.target.id =='blue'){
// 		body.style.backgroundColor = 'blue'
// 	}
// 	if(e.target.id =='white'){
// 		body.style.backgroundColor = 'white'
// 	}
// 	if(e.target.id =='gray'){
// 		body.style.backgroundColor = 'gray'
// 	}
// })
// })


const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

console.log(buttons);

buttons.forEach(function(button){
	console.log(button);
button.style.cursor ='pointer'
	button.addEventListener('click', function(e){
		console.log(e);
		console.log(e.target);

		if(e.target.id == 'yellow') {
			body.style.backgroundColor ='yellow'
		}

		if(e.target.id == 'gray') {
			body.style.backgroundColor ='gray'
		}

		if(e.target.id == 'blue') {
			body.style.backgroundColor ='blue'
		}

		if(e.target.id == 'white') {
			body.style.backgroundColor ='white'
		}
	})
})