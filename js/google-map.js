var google;

function initMap() {
    var myLatlng = new google.maps.LatLng(-1.481574, 37.258798);

    var mapOptions = {
        zoom: 10,
        center: myLatlng,
        scrollwheel: false,
        // ... styles ...
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var addresses = ['Machakos County, Kenya'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(addresses[x]) + '&key=YOUR_API_KEY', function (data) {
            if (data.results.length > 0) {
                var p = data.results[0].geometry.location;
                var latlng = new google.maps.LatLng(p.lat, p.lng);
                new google.maps.Marker({
                    position: latlng,
                    map: map,
                    icon: 'images/loc.png'
                });
            } else {
                console.log('No results found for address: ' + addresses[x]);
            }
        });
    }
}

google.maps.event.addDomListener(window, 'load', initMap);
