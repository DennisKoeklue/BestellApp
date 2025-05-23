function templateMainDishes(rendAll) {
    return`
    <div class="maindish_divs">
                        <div class="maindish_info">
                        <h3>${myDishes[rendAll].name}</h3>
                        <span>${myDishes[rendAll].description}</span>
                        <span class="price_span">${myDishes[rendAll].price}€</span>
                        </div>
                        <div class="maindish_add_div">
                            <div onclick ="addAll(myDishes, ${rendAll})" class="maindish_add_img">
                                <span class="add_symbole">+</span>
                            </div>
                        </div>
                    </div>
    `
}


function templateDessert(rendAll) {
    return`
    <div class="maindish_divs">
                        <div class="maindish_info">
                        <h3>${myDessert[rendAll].name}</h3>
                        <span>${myDessert[rendAll].description}</span>
                        <span class="price_span">${myDessert[rendAll].price}€</span>
                        </div>
                        <div class="maindish_add_div">
                            <div onclick ="addAll(myDessert, ${rendAll})" class="maindish_add_img">
                                <span class="add_symbole">+</span>
                            </div>
                        </div>
                    </div>
    `
}

function templateNonAlk(rendAll) {
    return`
    <div class="maindish_divs">
                        <div class="maindish_info">
                        <h3>${myDrinksNonAlk[rendAll].name}</h3>
                        <span class="price_span">${myDrinksNonAlk[rendAll].price}€</span>
                        </div>
                        <div class="maindish_add_div">
                            <div onclick ="addAll(myDrinksNonAlk, ${rendAll})" class="maindish_add_img">
                                <span class="add_symbole">+</span>
                            </div>
                        </div>
                    </div>
    `
}

function templateAlkohl(rendAll) {
    return`
    <div class="maindish_divs">
                        <div class="maindish_info">
                        <h3>${myDrinksAlk[rendAll].name}</h3>
                        <span class="price_span">${myDrinksAlk[rendAll].price}€</span>
                        </div>
                        <div class="maindish_add_div">
                            <div onclick="addAll(myDrinksAlk, ${rendAll})" class="maindish_add_img">
                                <span class="add_symbole">+</span>
                            </div>
                        </div>
                    </div>
    `
}


function templateBasketdishes(basket_Item) {
    let dishestofixprice = basketkorb[basket_Item].price * basketkorb[basket_Item].amount
    let afterdishesfixprice = dishestofixprice.toFixed(2)
    return`
     <div class="test">
                        <div class="bestellte_ware">
                            <h4>${basketkorb[basket_Item].name}</h4>
                        </div>
                        <div class="transaktion">
                            <div onclick = "minusAmount(${basket_Item})" class="minus">
                                <span class="minus_span">-</span>
                            </div>
                            <div class="number_of_dishes">
                                <span>${basketkorb[basket_Item].amount}</span>
                            </div>
                            <div onclick = "addedAmount(${basket_Item})" class="minus">
                                <span class="minus_span">+</span>
                            </div>
                            <div class="gesammt_summe">
                                <span>${afterdishesfixprice}€</span>
                            </div>
                            <img onclick ="removeObjektItem(${basket_Item})" class="trash_can" src="./img/icon/basket-2965747_640.png" alt="müll">
                        
                            
                        </div>
                    </div>
    `
}

function basketBill(totalSum) {
    let subsum = totalSum.toFixed(2);
    let bevorToFix = totalSum + 5.00
    let afterToFix= bevorToFix.toFixed(2)
    return`
    <span>${subsum}€</span>
    <span>5.00€</span>
    <h4>${afterToFix}€</h4>
    `
}

function basketBill0() {
    return`
    <span>0.00€</span>
    <span>5.00€</span>
    <h4>0.00€</h4>
    `
}

function basketButtonValue(counterValue) {
    return`
    <span>${counterValue}</span>
    
    `
}