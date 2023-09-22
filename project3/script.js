let bulb = document.querySelector('#bulb')

let btn = document.querySelector('button')

let flag =0
btn.addEventListener('click',function(){

if(flag==0) {
	bulb.style.backgroundColor = 'yellow'
	btn.textContent='Off'
	flag =1
}
else{
	bulb.style.backgroundColor = 'transparent'
	btn.textContent='On'
	flag =0
}

})