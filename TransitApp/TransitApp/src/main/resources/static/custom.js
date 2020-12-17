var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: parseFloat(userLocation.lat), lng: parseFloat(userLocation.lng) },
		zoom: 15,
		scrollwheel: false
	});
	
	
	var image = {url: '/bus_picture.png', 
			scaledSize: new google.maps.Size(50, 50)};
	var userMarker = new google.maps.Marker({
		position: { lat: parseFloat(userLocation.lat), lng: parseFloat(userLocation.lng) },
		map: map,
		});
	
	
	for (i=0; i<busLocations.length; i++){
		var marker = new google.maps.Marker({
		    position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
		    map: map,
		    icon: image
		});
	}
}