function initMap() { 
    var map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 41.881, lng: -87.623}, 
        zoom: 8    
    });
    
}
google.maps.event.addDomListener(window, 'load ', init);


