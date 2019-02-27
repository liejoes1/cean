// Location - Geo Loc https://api.apiit.edu.my/transix/locations

module.exports = function getLocation(callback)
{
    console.log('awd');
    /*
    msg.getLocation(function(response){
        // Here you have access to your variable
        console.log(response);
    })
    */

   var request = require('request');

   var url = 'https://api.apiit.edu.my/transix/locations';
   
   request.get({
       url: url,
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

}