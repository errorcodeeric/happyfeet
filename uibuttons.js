let searchBtn = document.getElementById('search_btn')
searchBtn.addEventListener('click', async function () {


    let searchInput = document.getElementById("searchterms");
    let geocodeAPI = "548443896699394431126x109315";
    let geocodeResult = await axios.get("https://geocode.xyz/" + searchInput.value + "?json=1&auth=" + geocodeAPI)
    // console.log(searchLoc)
    // alert(searchLoc);
    let searchLoc = [geocodeResult.data.latt, geocodeResult.data.longt];

    let circle300 = L.circle([geocodeResult.data.latt, geocodeResult.data.longt], {
        fillOpacity: 0.2,
        weight: 0.3,
        radius: 300
    })
        .addTo(map); // 300m circle at user location

    map.setView(searchLoc, 16);

    demoMarker(parseFloat(geocodeResult.data.latt), parseFloat(geocodeResult.data.longt));




})



let findmeBtn = document.getElementById('findme_btn')
findmeBtn.addEventListener('click', locateUser)



function openBooking() {

    let card = document.getElementById('bookingCard');
    card.style.zIndex = '999';

    bookingName = "Happy Feet";



}

let closeBookingBtn = document.getElementById('closeBookingBtn')
closeBookingBtn.addEventListener('click', function () {
    let card = document.getElementById('bookingCard');
    card.style.zIndex = '0';
})

let closeUserInfoBtn = document.getElementById('closeCardBtn')
closeUserInfoBtn.addEventListener('click', function () {
    let card = document.getElementById('userInfo');
    card.style.zIndex = '0';
})


menu_btn.addEventListener('click', function () {
    let card = document.getElementById('userInfo');
    let bookingHistory = document.getElementById('bookingHistory');
    bookingHistory.innerHTML=""
    bookingHistoryData.forEach(function(item){
        let div = document.createElement('div');
        div.innerHTML= `
        <strong>${item.bookingtime}</strong><br>
        ${item.shopname}<br>
        ${item.massageService}<br>
        ${item.duration}mins<br>
        <p>
        `;
        bookingHistory.appendChild(div);
    })

    card.style.zIndex = '999';
})

let cfmBtn = document.getElementById('cfmBtn');
cfmBtn.addEventListener('click', logBooking);

function logBooking() {
    let bookingtime = document.getElementById('datepicker').value
    let duration = document.getElementsByName('duration')
    for (selection of duration) {
        if (selection.checked) { duration = selection.value };
    }

    let massageService = document.getElementsByName('service')
    for (selection of massageService) {
        if (selection.checked) { massageService = selection.value };
    }


    console.log(bookingtime, duration, massageService)

    bookingItem = {
        shopname: "Happy Feet",
        bookingtime: bookingtime,
        duration: duration,
        massageService: massageService
    }

    bookingHistoryData.push(bookingItem)
    let card = document.getElementById('bookingCard');
    card.style.zIndex = '0';
    console.log(bookingHistoryData)
}