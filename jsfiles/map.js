var elLoc = document.getElementById('loc');
var elMap = document.getElementById('map');
var $map = $('#map');

function init() {
  if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
    elLoc.textContent = 'Loading . . . ';
  }
  else {
    elLoc.textContent = 'Browser does not support location; unable to get location.';
  }

  function success(position) {
    elLoc.textContent = 'You are here: ' +  position.coords.latitude + ', ' + position.coords.longitude;

    var mapOptions = {
      center: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      },
      mapTypeId: google.maps.MapTypeId.roadmap,
      zoom: 10
    };

    var map = new google.maps.Map(elMap, mapOptions);

    var pinOptions = {
      position: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      },
      map: map,
      animation: google.maps.Animation.DROP,
      icon: "assets/flagmarker.png"
    };

    var marker = new google.maps.Marker(pinOptions);
    
    $map.show();
  }

  function fail() {
    elLoc.textContent = 'Unable to get location.';
  }
}

window.onload = function() {
  $map.hide();
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDrq6itjJPber61m46hdD6xu_fwZ5zvnrQ&callback=init';
  document.getElementById('map').appendChild(script);
}
