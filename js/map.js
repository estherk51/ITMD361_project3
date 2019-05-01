var marker;
function initMap() { 
    var map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 41.881, lng: -87.623}, 
        zoom: 13    
    });
    
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 41.8663, lng: -87.6068}
    });
    marker.addListner('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }

}
google.maps.event.addDomListener(window, 'load ', init);


