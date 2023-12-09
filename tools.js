function locateUser(){
    
   navigator.geolocation.getCurrentPosition(function (position) {
    userLoc=[position.coords.latitude,position.coords.longitude]
   map.setView(userLoc, 16);})
   demoMarker(userLoc[0],userLoc[1])

}

  // Initialize Flatpickr date picker
  flatpickr("#datepicker", {
    enableTime: true, // Enable time selection
    dateFormat: "D d M Y, h:iK", // Specify the date and time format
    hourIncrement: 1, // increments of 1 hour only
    minuteIncrement: 15,
    stepping: 15, // increments of 15 minutes only
    disableMobile: true

    // Additional options or callbacks can be added here
  });