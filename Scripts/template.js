function templateMainDishes(i) {
    return`
    <div class="maindish_divs">
                        <div class="maindish_info">
                        <h3>${myDishes[i].name}</h3>
                        <span>${myDishes[i].description}</span>
                        <span class="price_span">${myDishes[i].price}</span>
                        </div>
                        <div class="maindish_add_div">
                            <div class="maindish_add_img">
                                <span class="add_symbole">+</span>
                            </div>
                        </div>
                    </div>
    `
}


function templateDessert(d) {
    return`
    <div class="maindish_divs">
                        <div class="maindish_info">
                        <h3>${myDessert[d].name}</h3>
                        <span>${myDessert[d].description}</span>
                        <span class="price_span">${myDessert[d].price}</span>
                        </div>
                        <div class="maindish_add_div">
                            <div class="maindish_add_img">
                                <span class="add_symbole">+</span>
                            </div>
                        </div>
                    </div>
    `
}

function templateNonAlk(n) {
    return`
    <div class="maindish_divs">
                        <div class="maindish_info">
                        <h3>${myDrinksNonAlk[n].name}</h3>
                        <span>Nach Tradition von der nonna</span>
                        <span class="price_span">${myDrinksNonAlk[n].price}</span>
                        </div>
                        <div class="maindish_add_div">
                            <div class="maindish_add_img">
                                <span class="add_symbole">+</span>
                            </div>
                        </div>
                    </div>
    `
}

function templateAlkohl(alko) {
    return`
    <div class="maindish_divs">
                        <div class="maindish_info">
                        <h3>${myDrinksAlk[alko].name}</h3>
                        <span>Nach Tradition von der nonna</span>
                        <span class="price_span">${myDrinksAlk[alko].price}</span>
                        </div>
                        <div class="maindish_add_div">
                            <div class="maindish_add_img">
                                <span class="add_symbole">+</span>
                            </div>
                        </div>
                    </div>
    `
}