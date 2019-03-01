// Location - Geo Loc https://api.apiit.edu.my/transix/locations
var global = require('./global');

module.exports = {
  getLocation: function(callback) {
    var request = require('request');
    request.get({
        url: global.url_list.bus_location,
        json: true,
        headers: {'User-Agent': 'request'}
      }, (err, res, data) => {
        if (err) {
          console.log('Error:', err);
        } else if (res.statusCode !== 200) {
          console.log('Status:', res.statusCode);
        }
        return callback(data);
    });
  },
}