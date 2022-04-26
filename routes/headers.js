var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(JSON.stringify(req.headers));
    res.send(JSON.stringify(req.headers));
});

module.exports = router;