function init() {
    LoadStorage()
    if (basketkorb != null) {
    renderBasketItem()
    renderAll('MainDishes', myDishes, templateMainDishes)
    renderAll('Desserts', myDessert, templateDessert)
    renderAll('NonAlk', myDrinksNonAlk, templateNonAlk)
    renderAll('Alk', myDrinksAlk, templateAlkohl)
    basketValueButton()
    }
    else{
    renderAll('MainDishes', myDishes, templateMainDishes)
    renderAll('Desserts', myDessert, templateDessert)
    renderAll('NonAlk', myDrinksNonAlk, templateNonAlk)
    renderAll('Alk', myDrinksAlk, templateAlkohl)
    }
    
    
}

function renderAll(id, dishes, template ) {
    let mainDishesRef = document.getElementById(id);
    mainDishesRef.innerHTML = "";

    for (let rendAll = 0; rendAll < dishes.length; rendAll++) {
        mainDishesRef.innerHTML += template (rendAll)

        
    }
}



function renderBasketItem() {
    let basketallPrice = document.getElementById('allPrices')
    const basketItem = document.getElementById('all_basketitem_render_div');
    basketItem.innerHTML = "";
    let totalSum = 0;
    let basket_Item = 0;

    for (basket_Item; basket_Item < basketkorb.length; basket_Item++) {
         totalSum = forTheBasketRender(basket_Item,basketItem,basketallPrice, totalSum);
    }
    
}


function forTheBasketRender(basket_Item,basketItem,basketallPrice, totalSum) {
    dishestofixprice = basketkorb[basket_Item].price * basketkorb[basket_Item].amount
    basketItem.innerHTML += templateBasketdishes(basket_Item, dishestofixprice.toFixed(2));
    totalSum += basketkorb[basket_Item].amount * basketkorb[basket_Item].price
    basketallPrice.innerHTML = basketBill(totalSum.toFixed(2), (totalSum + 5.00).toFixed(2));

    return totalSum
    }


function basketValueButton() {
    let Button = document.getElementById('items');
    let counterValue = basketkorb.length
    Button.innerHTML = "";
    Button.innerHTML = basketButtonValue(counterValue);
}


function addAll(db, i) {
    let test = db[i]

    saveStorage()
    orderConfirmationNone()
    errorOrderAdd()
    addzusammen(test , i)
    renderBasketItem()
    basketValueButton()
}


function addzusammen(test, i) {
    const findeArtikel = basketkorb.find(artikel => artikel.name === test.name)
    if (findeArtikel === undefined) {
        basketkorb.push({
            "name":test.name,
            "amount":1,
            "price":test.price
        })
        saveStorage()
    }
    else
    {
        findeArtikel.amount ++;
        saveStorage()
    } 

}


function basktetUpdateforMinus(){
    let basketallPrice = document.getElementById('allPrices')
    basketallPrice.innerHTML = basketBill0()
}


function addedAmount(i) {
    basketkorb[i].amount ++
    saveStorage()
    renderBasketItem()

}


function minusAmount(basket_Item) {
    if (basketkorb[basket_Item].amount === 1) {
        removeObjektItem(basket_Item)
        saveStorage()
        renderBasketItem()
        basketValueButton()
    }
    else{
        basketkorb[basket_Item].amount --
        saveStorage()
        renderBasketItem()
    }
}

function removeObjektItem(basket_Item) {
    basketkorb.splice(basket_Item, 1)
    saveStorage()
    basktetUpdateforMinus()
    renderBasketItem()
    basketValueButton()
}


function orderButton() {
    if (basketkorb.length === 0) {
        errorOrderRemove()
        orderConfirmationNone()
    }
    else{
        basketkorb = [];
        const basketItem2 = document.getElementById('all_basketitem_render_div');
        basketItem2.innerHTML = "";
        basktetUpdateforMinus()
        saveStorage()
       orderConfirmation()
       basketValueButton()

        
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

function orderConfirmationNone() {
    document.getElementById('order_confirmation_div').classList.add('d_none')
}

function swapOverlay3() {
let Overlay = document.getElementById('basket_wrapper')
    Overlay.classList.remove("basket_wrapper");
    Overlay.classList.add("basket_show");
}

function SwapOverlayX() {
    let Overlay = document.getElementById('basket_wrapper')
    Overlay.classList.remove("basket_show")
    Overlay.classList.add("basket_wrapper")
}



function saveStorage() {
    localStorage.setItem('basketkorb' , JSON.stringify(basketkorb));
}

function LoadStorage() {
    
basketkorb = JSON.parse(localStorage.getItem('basketkorb')) || basketkorb
}


