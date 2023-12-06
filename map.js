let SGlatlong = [1.290270,103.851959]


let map = L.map('map').setView(SGlatlong, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


function dropMarker(places){
    for(i = 0; i < places.length; i++){
        L.marker([places[i].geocodes.main.latitude, places[i].geocodes.main.longitude]).addTo(map)
    }

}

document.getElementById("search_btn").addEventListener("click", async function (){
//     let lat
//     let lng
//    navigator.geolocation.getCurrentPosition((position) => {
//         lat = position.coords.latitude;
//         lng = position.coords.longitude;
//         userLoc = [lat,lng]
//         map.setView(userLoc,18)
//         L.circle(userLoc, 100).addTo(map);

 
//       });
    let searchInput = document.getElementById("searchterms");
    let geocodeAPI = "548443896699394431126x109315";
    let geocodeResult= await axios.get("https://geocode.xyz/" + searchInput.value +"?json=1&auth=" + geocodeAPI) 
    // console.log(searchLoc)
    // alert(searchLoc);
    let searchLoc =  [geocodeResult.data.latt, geocodeResult.data.longt]
    map.setView(searchLoc, 18);

    
})

    // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    // .bindTooltip("my tooltip text");