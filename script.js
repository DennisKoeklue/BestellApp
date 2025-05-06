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


function standaAloneAmountUpdate() {
    
}


function addedAmount(i) {
    basketkorb[i].amount ++
    renderBasketItem()

}

function minusAmount(i) {
    if (basketkorb[basket_Item].amount === 0) {
        basketkorb.splice(basket_Item, 1)
        renderBasketItem()
    }
    else{
        basketkorb[i].amount --
        renderBasketItem()
    }
}

function removeObjektItem(i) {
    basketkorb[i].splice()
}


