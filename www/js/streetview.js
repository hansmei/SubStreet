
	
var streetview = {
	
	initialize: function() {
		
		var self = this;
		// self.currentMap = "map";
		
		self.latLongs = [
			{lat: 59.912366, lng: 10.790943},
			{lat: 59.912310, lng: 10.790943},
			{lat: 59.912250, lng: 10.790980},
		];
		
		var fenway = self.latLongs[0];
		self.map = new google.maps.Map(document.getElementById('map_canvas'), {
			center: fenway,
			zoom: 14
		});
		
		// Assign a location for me
		// self.myLocation = new google.maps.Marker({
			// map: self.map,
			// title: "Icon"
		// });
		
		self.myLocation = new google.maps.Marker({
			clickable: false,
			icon: new google.maps.MarkerImage('img/icon-current-location.png'),
			// icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
					// new google.maps.Size(22,22),
					// new google.maps.Point(0,18),
					// new google.maps.Point(11,11)),
			// shadow: null,
			// zIndex: 999,
			map: self.map
		});
		
		self.markers = [];
		
		for(i=0;i < self.latLongs.length; i++) {
			self.markers[i] = new google.maps.Marker({
				position: self.latLongs[i],
				map: self.map,
				title: "Icon"
			});
			// if (marker && marker.setMap) marker.setMap(panorama);
			// if (marker && marker.setMap) marker.setMap(map);
		}
		
		// self.panorama = new google.maps.StreetViewPanorama(
			// document.getElementById('pano'), {
				// position: fenway,
				// zoomControl: false,
			// }
		// );
		// self.map.setStreetView(panorama);
		
		self.panorama = self.map.getStreetView();
		self.panorama.setPosition(fenway);
	  
		// google.maps.event.addListenerOnce(panorama, 'status_changed', function () {
			// // var heading = google.maps.geometry.spherical.computeHeading(myStreetView.getLocation().latLng, results[0].geometry.location);
			// // myStreetView.setPov({
				// // heading: heading,
				// // pitch: 0
			// // });
			// setTimeout(function() {
				// for(i=0; i<self.latLongs.length; i++) {
					// marker = new google.maps.Marker({
						// position: self.latLongs[i],
						// map: self.map,
						// title: "Icon"
					// });
					// // if (marker && marker.setMap) marker.setMap(panorama);
					// // if (marker && marker.setMap) marker.setMap(map);
				// }
			// }, 500);
		// });
	},
	
	
	loadGeo: function() {
		var element = document.getElementById('geolocation');
		function success(position) {
			element.innerHTML = 'Latitude: ' + position.coords.latitude     + '<br />' +
			'Longitude: '           + position.coords.longitude             + '<br />' +
			'Altitude: '            + position.coords.altitude              + '<br />' +
			'Accuracy: '            + position.coords.accuracy              + '<br />' +
			'Altitude Accuracy: '   + position.coords.altitudeAccuracy      + '<br />' +
			'Heading: '             + position.coords.heading               + '<br />' +
			'Speed: '               + position.coords.speed                 + '<br />' +
			'Timestamp: '           + new Date(position.timestamp)          + '<br />';
			
			var me = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			self.myLocation.setPosition(me);

		}
		 
		function error(error) {
			alert(error.message);
		}
		
		if (navigator.geolocation){
			element.style.zIndex = "100";
			var watchID = navigator.geolocation.watchPosition(success, error, {'enableHighAccuracy' : true});
		}
	}
	
	// toggleStreetView: function() {
		// // if(self.currentMap == "map"){
			// // alert("go street");
			// // self.panorama.SetVisible(true);
		// // } else{
			// // alert("go map");
		// // }
		// var toggle = panorama.getVisible();
	  // if (toggle == false) {
		// panorama.setVisible(true);
	  // } else {
		// panorama.setVisible(false);
	  // }
	// },

	// geocodeAddress: function() {
		// // var address = "344 Laguna Dr, Milpitas, CA  95035";
		// var latLongs = [
			// {lat: 59.912366, lng: 10.790943},
			// {lat: 59.912310, lng: 10.790943},
			// {lat: 59.912250, lng: 10.790980},
		// ];
		// geocoder.geocode({
			// 'location': latLongs[0]
		// }, function (results, status) {
			// //alert (results);
			// if (status == google.maps.GeocoderStatus.OK) {
				// //alert(results[0].geometry.location);
				// myStreetView = new google.maps.StreetViewPanorama(document.getElementById("map_canvas"), {
					// zoomControl: false,
					// // zoomControlOptions: {
					  // // style: google.maps.ZoomControlStyle.SMALL
					// // },
				// });
				// myStreetView.setPosition(results[0].geometry.location);			
				// google.maps.event.addListenerOnce(myStreetView, 'status_changed', function () {
					// // var heading = google.maps.geometry.spherical.computeHeading(myStreetView.getLocation().latLng, results[0].geometry.location);
					// // myStreetView.setPov({
						// // heading: heading,
						// // pitch: 0
					// // });
					// setTimeout(function() {
						// for(i=0; i<latLongs.length; i++) {
							// marker = new google.maps.Marker({
								// position: latLongs[i],
								// map: myStreetView,
								// title: "Icon"
							// });
							// if (marker && marker.setMap) marker.setMap(myStreetView);
						// }
					// }, 500);
				// });

			// } else {
				// alert("Geocode was not successful for the following reason: " + status);
			// }
		// });
		// // google.maps.event.addDomListener(document.getElementById('geoBtn'), 'click', this.geocodeAddress);
	// }
	
};