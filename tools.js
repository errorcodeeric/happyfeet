function locateUser(){
    
   navigator.geolocation.getCurrentPosition(function (position) {
    userLoc=[position.coords.latitude,position.coords.longitude]
   map.setView(userLoc, 16);})
   demoMarker(userLoc[0],userLoc[1])

}


  // Initialize Bootstrap Datepicker inline
  $(document).ready(function(){
   $('#datepicker').datepicker({
     format: 'dd/mm/yyyy',
     inline: true, // Display calendar inline
     // Add any additional options or configurations here
   });
 });