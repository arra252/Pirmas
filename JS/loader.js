// 'JSON' data included as above
data = '[{"blue" : "is ok", "red" : "is my fave color"}]';

// Function to 'load JSON' data
// function load() {
function load(text) {
    // var someData_notJSON = JSON.parse(data);
    // var someData_notJSON = JSON.parse(text);
    // console.log(someData_notJSON[0].red); // Will log "is my fave color"
    // console.log(someData_notJSON[0].blue);
    let meniu = JSON.parse(text);
    let meniuString = '';
    for (let i = 0; i < meniu.length; i++) {
        let meniuItem = meniu[i];
        meniuString += '<li><a href="' + meniuItem.adresas + '">' + meniuItem.pavadinimas + '</a></li>'
    }
    document.querySelector('header > ul').innerHTML = meniuString;
}

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'my_data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

// loadJSON(load);