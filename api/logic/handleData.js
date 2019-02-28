var msg = require('./getLocation');

// Current Geoloc 3.05749 101.68820
module.exports = {
    getDistance: function (lat, lon, callback) {
        console.log('awd');
        msg.getLocation(function (response) {
            // Here you have access to your variable
            var result = [];
            for (var i = 0; i < response.locations.length; i++) {
                result.push({
                    name: response.locations[i].location_name,
                    location: response.locations.length,
                    distance: distance(response.locations[i].location_latitude, response.locations[i].location_longitude,
                        3.05749, 101.68820, 'K')
                })

            }
            console.log(result);
        })

        return callback('awd');
    }
}

function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        console.log(dist);
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}