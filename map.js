let SGlatlong = [1.290270, 103.851959];


let map = L.map('map', { zoomControl: false }).setView(SGlatlong, 13);

var footMarker = L.icon({
    iconUrl: 'footmarker.png',
    iconSize: [60, 60], // size of the icon
});


L.tileLayer('https://tile.jawg.io/d0dc7854-59fe-4841-bd7c-cd7a0d2f6a99/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    accessToken: 'HxoqSeTTFzOW4bS5UF6SXPmOAVDzdaARLyiIHIzBgmNNTmrKlepLyUwbgxvyTPfy'
}).addTo(map);



function dropMarker(places) {
    for (i = 0; i < places.length; i++) {
        L.marker([places[i].geocodes.main.latitude, places[i].geocodes.main.longitude], { icon: footMarker }).addTo(map);
    }

}

function demoMarker(lat, lon) {
    userLoc = [lat, lon]
    demoLoc1 = [lat + 0.001, lon + 0.001];
    demoLoc2 = [lat - 0.001, lon - 0.001];


    let demoPopupContent1 = `
    <div style="max-width: 85px;" class="text-center">
<img src="happyfeetlogo.jpg"
style="width: 60px; height: 60px"><br>
<strong>Happy Feet</strong><br>
Open 24hrs<p>
<hr>
<button type="button" id="booking_btn1" class="btn-sm  btn-primary" data-bs-toggle="modal" data-bs-target="#bookingModal">Book Now</button><p>
<script>let bookingbtn1 = document.getElementById('booking_btn1')</script>
<a href="https://www.google.com/maps/dir/${lat},${lon}/${demoLoc1[0]},${demoLoc1[1]}/data=!4m2!4m1!3e2" class="btn-sm btn-primary">Directions</a>
</div>`

    let demoPopupContent2 = `
<div style="max-width: 85px;" class="text-center">
<img src="unwindfootspa.png"
style="width: 60px; height: 60px"><br>
<strong>Unwind Foot Spa</strong><br>
Closed<p>
<hr>

<!--
<div class="btn-sm btn-primary id="booking_btn2">Book Now</div><p>
<a href="https://www.google.com/maps/dir/${lat},${lon}/${demoLoc2[0]},${demoLoc2[1]}/data=!4m2!4m1!3e2" class="btn-sm btn-primary">Directions</a>
-->
</div>`;


    L.marker(demoLoc1, { icon: footMarker }).addTo(map)
        .bindPopup(demoPopupContent1)
        .openPopup(); // Add a demo marker with a popup near user's location

    L.marker(demoLoc2, { icon: footMarker }).addTo(map)
        .bindPopup(demoPopupContent2) // Add a second marker for comparison




}



function getUserLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
        let userLat = position.coords.latitude;
        let userLon = position.coords.longitude;

        map.setView([userLat, userLon], 16); // center map at user location with zoom 16

        let circle300 = L.circle([userLat, userLon], {
            fillOpacity: 0.2,
            weight: 0.3,
            radius: 300
        })
            .addTo(map); // 300m circle at user location

        demoMarker(userLat, userLon); // drop demo marker

    })
}

document.addEventListener('DOMContentLoaded', getUserLocation);

