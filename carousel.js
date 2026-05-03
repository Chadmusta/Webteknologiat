let cats_array = [{ "name": "Cat #1", "src": "kuvat/cat1.webp" }, { "name": "Cat #2", "src": "kuvat/cat2.jpg" },
{ "name": "Cat #3", "src": "kuvat/cat3.jpg" }];
let carouselRunning;
let index = 0;
let localStorageKey = "imageID";

window.onload = function () {
    index = 0;
    document.getElementById("catImage").src = cats_array[index].src;
    document.getElementById("catName").textContent = cats_array[index].name;
    carouselRunning = false;
}

function showNext() {

    index = index + 1;
    localStorage.setItem(localStorageKey, index);
    if (index >= cats_array.length) {
        index = 0;
    }
    document.getElementById("catImage").src = cats_array[index].src;
    document.getElementById("catName").textContent = cats_array[index].name;
}
function showPrevious() {
    index = index - 1;
    localStorage.setItem(localStorageKey, index);
    if (index < 0) {
        index = cats_array.length - 1;
    }
    document.getElementById("catImage").src = cats_array[index].src;
    document.getElementById("catName").textContent = cats_array[index].name;
}
function startSlideshow() {
    if (carouselRunning == false) {
        carouselRunning = true;
        window.carouselInterval = setInterval(showNext, 2000);
    }
    else if (carouselRunning == true) {
        carouselRunning = false;
        clearInterval(window.carouselInterval);

    }

}