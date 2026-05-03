let counter = 0;

function haeData() {


    document.getElementById("loader").style.display = "block";

    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {


            document.getElementById("loader").style.display = "none";


            counter++;
            document.getElementById("laskuri").textContent = counter;


            let accordion = document.getElementById("accordionExample");

            let html = `
            <div  class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#item${counter}">
                        Haku ${counter}
                    </button>
                </h2>

                <div id="item${counter}" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        ${data.value}
                    </div>
                </div>
            </div>
            `;

            accordion.innerHTML += html;
        })
        .catch(error => {
            document.getElementById("loader").style.display = "none";
            console.error("Virhe:", error);
        });
}

function getnumbers() {
    $("#loader").show();
    fetch("http://number-trivia.com/random/year")
    .then(function (response) {
        //.then, palauttaa tässä Promisen (lupauksen), jota käytetään seuraavassa then-funktiossa. 
        return response.text(); //huom. tässä response tulee JSON-muodossa
    })
    .then(function (result) {
        //Jos lupaus onnistuu (eli lupaus on täytetty), tämä toiminto suoritetaan
        console.log(result);
    })
    .catch(function (error) {
        //Jos lupaus epäonnistuu (eli lupaus on hylätty), tämä toiminto suoritetaan
        console.log(error);
    });
    
}

window.onload = function() {
    $("#loader").hide();
}


