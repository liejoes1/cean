var express = require('express');
var router = express.Router();
var msg = require('../logic/getLocation');


/* GET users listing. */
router.get('/', function(req, res, next) {
    msg(function(response){
        // Here you have access to your variable
        console.log(response);
        res.json(response.locations[0].location_latitude)
    })
 
  
});


module.exports = router;
