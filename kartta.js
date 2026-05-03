let myMap;
let address;
let city;
window.onload = function(){ 
    address = "Yliopistonkatu 36";
    city = "Lappeenranta";
    myMap = document.getElementById("map-frame");
    myMap.src = 'https://www.google.com/maps?q=' + address + "+" + city + '&output=embed';
}

function showMap(){
    console.log("showMap");
    address = document.getElementById("search-address").value;
    city = document.getElementById("search-city").value;
    myMap.src = 'https://www.google.com/maps?q=' + address + "+" + city + '&output=embed';
}