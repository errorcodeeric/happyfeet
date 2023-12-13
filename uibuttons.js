let searchBtn = document.getElementById('search_btn')
searchBtn.addEventListener('click', async function(){


            let searchInput = document.getElementById("searchterms");
            let geocodeAPI = "548443896699394431126x109315";
            let geocodeResult= await axios.get("https://geocode.xyz/" + searchInput.value +"?json=1&auth=" + geocodeAPI) 
            // console.log(searchLoc)
            // alert(searchLoc);
            let searchLoc =  [geocodeResult.data.latt, geocodeResult.data.longt];

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



bookingbtn1.addEventListener('click', function(){
    bookingName = "Happy Feet";
    let bookingtime = document.getElementById('datepicker').value
    let duration = document.getElementsByName('duration')
    for(selection of duration){
        if(selection.checked) {duration = selection.value};
    }

    let massageService = document.getElementsByName('massageService')
    for(selection of massageService){
        if(selection.checked) {massageService = selection.value};
    }


    console.log(bookingtime, duration, massageService )

    bookingItem ={
        bookingtime: bookingtime,
        duration: duration,
        massageService: massageService
    }

    bookingHistory.push(bookingItem)

    console.log(bookingHistory)

})



// customize marker
// branding
// make some customizations so it's not obviously leaflet
// rating system
