function init() {
    renderMainDishes()
    renderDesserts()
    renderNonAlk()
    renderAlkohol()
}


function renderMainDishes() {
    const mainDishesRef = document.getElementById(`MainDishes`);
    mainDishesRef.innerHTML = "";


    for (let i = 0; i < myDishes.length; i++) {
        mainDishesRef.innerHTML += templateMainDishes(i)
        
    }
}

function renderDesserts() {
    const mainDessertsRef = document.getElementById(`Desserts`);
    mainDessertsRef.innerHTML = "";

    for (let d = 0; d < myDessert.length; d++) {
        mainDessertsRef.innerHTML += templateDessert(d)
        
    }
}

function renderNonAlk() {
    const mainNonAlk = document.getElementById(`NonAlk`);
    mainNonAlk.innerHTML = "";

    for (let n = 0; n < myDrinksNonAlk.length; n++) {
        mainNonAlk.innerHTML += templateNonAlk(n)
        
    }
}


function renderAlkohol() {
    const mainAlkohol = document.getElementById(`Alk`);
    mainAlkohol.innerHTML = "";

    for (let alko = 0; alko < myDrinksAlk.length; alko++) {
        mainAlkohol.innerHTML += templateAlkohl(alko)
        
    }
}


function renderBasketItem() {
    let basketallPrice = document.getElementById('allPrices')
    const basketItem = document.getElementById('all_basketitem_render_div');
    basketItem.innerHTML = "";
    let totalSum = 0;
    let basket_Item = 0;
    for (basket_Item; basket_Item < basketkorb.length; basket_Item++) {
        basketItem.innerHTML += templateBasketdishes(basket_Item);
        totalSum += basketkorb[basket_Item].amount * basketkorb[basket_Item].price
        basketallPrice.innerHTML = basketBill(totalSum);
    }
    
}

function add(i) {
    let test = myDishes[i]

    errorOrderAdd()
    addzusammen(test , i)
    renderBasketItem()
}

function addDessert(i) {
    let test = myDessert[i]

    errorOrderAdd()
    addzusammen(test , i)
    renderBasketItem()
}

function addNonAlk(i) {
    let test = myDrinksNonAlk[i]

    errorOrderAdd()
    addzusammen(test , i)
    renderBasketItem()
}

function addAlk(i) {
    let test = myDrinksAlk[i]

    errorOrderAdd()
    addzusammen(test , i)
    renderBasketItem()

}

function addzusammen(test, i) {
    const findeArtikel = basketkorb.find(artikel => artikel.name === test.name)
    if (findeArtikel === undefined) {
        basketkorb.push({
            "name":test.name,
            "amount":1,
            "price":test.price
        })
    }
    else
    {
        findeArtikel.amount ++;
    } 

}


function basktetUpdateforMinus(){
    let basketallPrice = document.getElementById('allPrices')
    basketallPrice.innerHTML = basketBill0()
}


function addedAmount(i) {
    basketkorb[i].amount ++
    renderBasketItem()

}

function minusAmount(basket_Item) {
    if (basketkorb[basket_Item].amount === 1) {
        removeObjektItem(basket_Item)
        renderBasketItem()
        

    }
    else{
        basketkorb[basket_Item].amount --
        renderBasketItem()
    }
}

function removeObjektItem(basket_Item) {
    basketkorb.splice(basket_Item, 1)
    basktetUpdateforMinus()
    renderBasketItem()
}


function orderButton() {
    if (basketkorb.length === 0) {
        errorOrderRemove()
    }
    else{
        delete basketkorb
        const basketItem2 = document.getElementById('all_basketitem_render_div');
        basketItem2.innerHTML = "";
        basktetUpdateforMinus()
       orderConfirmation()

        
    }
}


function errorOrderRemove() {
    document.getElementById('error').classList.remove('d_none')
}


function errorOrderAdd() {
    document.getElementById('error').classList.add('d_none')
}

function orderConfirmation() {
    document.getElementById('order_confirmation_div').classList.toggle('d_none')
}


