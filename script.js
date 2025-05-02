function init() {
    renderMainDishes()
    renderDesserts()
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
    
}


function renderAlkohol() {
    
}

