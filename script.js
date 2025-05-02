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

