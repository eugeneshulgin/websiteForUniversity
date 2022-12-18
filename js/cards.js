const getCards = function() {
    const navCards = document.querySelector('.nav__cards')

    const tbody = document.querySelector('tbody')

    const flexContainer = document.querySelector('.flex')
    const modal = document.querySelector('.modal')
    const closeLink = document.querySelector('.close__link')
    const deleteShopCart = document.querySelector('.delete__shopCart')

    // closeLink.addEventListener('click', (e)=> {
    //     e.preventDefault();
        
    // })

    deleteShopCart.addEventListener('click', (e)=> {
        e.preventDefault();
        localStorage.removeItem('shopCart');

        const shopCart = localStorage.getItem('shopCart') ? JSON.parse(localStorage.getItem('shopCart')) : []

        getPaintShopCart(shopCart)
        getPaintShopCartCount(shopCart.length)
    })


    modal.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.closest('.close__link2') || e.target.classList.contains('modal')) {
            modal.style.display = 'none'
        }
    })


    const getPaintShopCartCount = (count) => {
        navCards.innerHTML=``
        const span = document.createElement('div')
        span.innerHTML = `${count}`
        navCards.append(span)
    }


    const getPaintShopCart = (shopCart) => {
        tbody.innerHTML=``
        shopCart.forEach(item => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.count}</td>
                <td>${item.price}</td>
                <td>${item.count * item.price}</td> 
                <td><button class="deleteItem">X</button></td>  
            `
            tbody.append(tr)

            tr.addEventListener('click', (e)=> {
                const newArr = shopCart.filter(itemShopCart => itemShopCart.id !== item.id)
                localStorage.setItem('shopCart', JSON.stringify(newArr));
                getPaintShopCart(newArr)
                getPaintShopCartCount(newArr.length)
            })
        })
    }


    navCards.addEventListener('click', (e)=> {
        e.preventDefault();
        modal.style.display = 'flex'
        
        const shopCart = localStorage.getItem('shopCart') ? JSON.parse(localStorage.getItem('shopCart')) : []  
        getPaintShopCart(shopCart)
    })

    /* Добавления товаров в корзину (запись в LS) */
    const addToShopCart = (currentId) => {
        const cardsLS = JSON.parse(localStorage.getItem('cards'))

        const currentCard = cardsLS.find(item => item.id === currentId)

        const shopCart = localStorage.getItem('shopCart') ?
        JSON.parse(localStorage.getItem('shopCart')) : []

        if (shopCart.some(item => item.id === currentCard.id)) {
            shopCart.map (item => {
                if (item.id === currentCard.id) {
                    item.count++
                }
                return item;
            })
            } else {
                currentCard.count = 1;
                shopCart.push(currentCard)
            }
        localStorage.setItem('shopCart', JSON.stringify(shopCart))   

        getPaintShopCartCount(shopCart.length);         
    }

    flexContainer.addEventListener('click', (event)=> {
        event.preventDefault();
        if (event.target.closest('.flex__link')) {
            const card = event.target.closest('.flex__link')
            const currentId = card.dataset.id 
            addToShopCart (currentId);
        }
    })
    

    const shopCart = localStorage.getItem('shopCart') ? JSON.parse(localStorage.getItem('shopCart')) : []  
    getPaintShopCartCount(shopCart.length);


}
getCards()

