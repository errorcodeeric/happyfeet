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

  function displayContactInfo(){
    document.getElementById('contactInfo').innerHTML=`
    <h6 class="card-subtitle mb-2 text-muted">Contact Information</h6>
    <div class="card-text"><b>Name:</b> ${contactInfo.userName}</div>
    <div class="card-text"><b>Email:</b> ${contactInfo.userEmail}</div>
    <div class="card-text"><b>Mobile:</b> ${contactInfo.userMobile}</div>

    <hr class="my-4">
    
    `
  }

  displayContactInfo()