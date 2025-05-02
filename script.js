function renderMainDishes() {
    const mainDishesRef = document.getElementsByClassName(`all_maindish_render_div`);
    mainDishesRef.innerHTML = "";


    for (let i = 0; i < myDishes.length; i++) {
        mainDishesRef.innerHTML += templateMainDishes(i)
        
    }
}

