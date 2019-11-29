
let lemposBusena = true;
let lempa = document.getElementById('lempute');

function toggleLamp() {
    if (lemposBusena) {
        lempa.src = "../img/L_off.png";
    } else {
        lempa.src = "../img/Lamp_on.jpg";
    }
    lemposBusena = !lemposBusena;
}
