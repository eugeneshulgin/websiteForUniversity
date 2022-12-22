const navDropdown = document.querySelector('.nav__dropdown')

const dropdown = document.querySelector('.dropdown')

const navInput = document.querySelector('.nav__input')


navDropdown.addEventListener('click', ()=> {
    dropdown.classList.toggle('block')
})


const cards = [
    {   id:'01',
        name: 'синий латекс',
        img: 'images/синийЛатекс.png',
        price: '0.50',
        data: 'ШАРЫ ИЗ ЛАТЕКСА',
    },
    {
        id:'02',
        name: 'красный латекс',
        img: 'images/красныйЛатекс.png',
        price: '0.50',
        data: 'ШАРЫ ИЗ ЛАТЕКСА',
    },
    {
        id:'03',
        name: 'зеленый латекс',
        img: 'images/зеленыйЛатекс.png',
        price: '0.50',
        data: 'ШАРЫ ИЗ ЛАТЕКСА',
    },
	 {
		id:'04',
		name: 'желтый латекс',
		img: 'images/желтыйЛатекс.png',
		price: '0.50',
		data: 'ШАРЫ ИЗ ЛАТЕКСА',
	},
	{
		id:'05',
		name: 'оранжевый латекс',
		img: 'images/оранжевыйЛатекс.png',
		price: '0.50',
		data: 'ШАРЫ ИЗ ЛАТЕКСА',
	  },
	  {
		id:'06',
		name: 'фиолетовый латекс',
		img: 'images/фиолетовыйЛатекс.png',
		price: '0.50',
		data: 'ШАРЫ ИЗ ЛАТЕКСА',
	},
    {   
        id:'08',
        name: 'красный фольга',
        img: 'images/красныйфольга.png',
        price: '5',
        data: 'ШАРЫ ИЗ ФОЛЬГИ',
    },
    {
        id:'09',
        name: 'розовый фольга',
        img: 'images/розовыйфольга.png',
        price: '8',
        data: 'ШАРЫ ИЗ ФОЛЬГИ',
    },
    {
        id:'10',
        name: 'зеленый фольга',
        img: 'images/зеленыйфольга.png',
        price: '10',
        data: 'ШАРЫ ИЗ ФОЛЬГИ',
    },
	 {   
		id:'15',
		name: 'голубой фольга',
		img: 'images/голубойФольга.png',
		price: '8',
		data: 'ШАРЫ ИЗ ФОЛЬГИ',
	},
    {
        id:'11',
        name: 'цифра 1',
        img: 'images/1.png',
        price: '5',
        data: 'ЦИФРЫ ИЗ ФОЛЬГИ',
    },
    {
        id:'12',
        name: 'цифра 2',
        img: 'images/2.png',
        price: '10',
        data: 'ЦИФРЫ ИЗ ФОЛЬГИ',
    },
    {
        id: '13',
        name: 'цифра 3',
        img: 'images/3.png',
        price: '10',
        data: 'ЦИФРЫ ИЗ ФОЛЬГИ',
    },
    {
        id:'14',
        name: 'цифра 4',
        img: 'images/4.png',
        price: '10',
        data: 'ЦИФРЫ ИЗ ФОЛЬГИ',
    },
	 {   
		id:'07',
		name: 'цифра 5',
		img: 'images/5.png',
		price: '10',
		data: 'ЦИФРЫ ИЗ ФОЛЬГИ',
  },

  {   
	id:'16',
	name: 'цифра 6',
	img: 'images/6.png',
	price: '10',
	data: 'ЦИФРЫ ИЗ ФОЛЬГИ',
},
{   
	id:'17',
	name: 'цифра 7',
	img: 'images/7.png',
	price: '10',
	data: 'ЦИФРЫ ИЗ ФОЛЬГИ',
},
{   
	id:'18',
	name: 'цифра 8',
	img: 'images/8.png',
	price: '10',
	data: 'ЦИФРЫ ИЗ ФОЛЬГИ',
},
{   
	id:'19',
	name: 'цифра 9',
	img: 'images/9.png',
	price: '10',
	data: 'ЦИФРЫ ИЗ ФОЛЬГИ',
}

]

localStorage.setItem('cards', JSON.stringify(cards))





const dropdownLink = document.querySelectorAll('.dropdown__link')

const flexContainer = document.querySelector('.flex')


const getCardsPaint = (arr) => {
    flexContainer.innerHTML = ''
    arr.forEach(item => {
        const cardsItem = document.createElement('div')
        cardsItem.classList.add('flex__item')
        cardsItem.innerHTML = `
       
            <div style='background-image: url(${item.img});' class="flex__img flex__img_bg1"> 
            <div class="flex__over">
            <a class="flex__link" data-id='${item.id}' href="#">КУПИТЬ</a>
        </div>
    </div>
            <h3>${item.name}</h3>
            <p>${item.price}</p>
    `
        flexContainer.append(cardsItem)
    })
}


navInput.addEventListener('input', (event)=> {
    const inputValue = navInput.value
    const arr = cards.filter(item => 
        item.name.toLowerCase().includes
        (inputValue.toLowerCase()));
   
    getCardsPaint(arr)
})







dropdownLink.forEach(link => {
    link.addEventListener('click',(event) => {
        event.preventDefault()
        let linkValue = link.innerHTML
       
        const arr = cards.filter(item => linkValue === item.data) 
        
        getCardsPaint(arr)
     })
})

