var express = require('express');
var router = express.Router();
var handleData = require('../logic/handleData');
var global = require('../logic/global');


/* GET users listing. */

router.get('/lat/:lat/lon/:lon', function (req, res, next) {     
    handleData.getDistance(req.params.lat, req.params.lon, function (response) {
        // Check if lat and lon being passed
        //console.log(req.query.lon);
        res.json(response)
    })
});

router.get('/*', function (req, res, next) {
    res.json(global.error_get);
});

module.exports = router;
