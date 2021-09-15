let celsius = document.getElementById('celsius');
let fareneheit = document.getElementById('farenheit');
let button = document.getElementById('btn');
let button2 = document.getElementById('btn2');
tulos1 = document.getElementById('tulos1');
tulos2 = document.getElementById('tulos2');


function muunnoslaskuri() {
    celsiuksiksi = (fareneheit.value -32) * (5/9)
    tulos2.innerHTML = Math.round(celsiuksiksi * 100) / 100 + "&degC";
}

function muunnoslaskuri2() {
    farenheiteiksi = celsius.value * (9/5) + 32;
    tulos1.innerHTML = Math.round(farenheiteiksi * 100) / 100 + "&degF";
}
