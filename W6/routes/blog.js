var express = require('express');
var router = express.Router();

let blogData = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(blogData);
});

router.post('/', function(req, res, next) {
    const body = req.body;
    blogData.push(body);
    console.log(body);
    res.send('Post-Request empfangen');
});

router.get('/1', function(req, res, next) {
    res.send(blogData[0]);
});

module.exports = router;

// Für die Datenstruktur wird ein JSON Objekt verwendet, da es viele einzelne Blogeeinträge gibt.
