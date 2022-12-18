const form = document.querySelector('.form')

const obj = {
	name:'Tom',
	age:20
}

const {Name,age} = obj
console.log(Name,age);
const data = {}

form.addEventListener('submit', (e) => {
	e.preventDefault()
	for (let elem of form.elements){
		if (elem.name){
			console.log(elem.value);
		}
	
	}

})


// fetch - почитать