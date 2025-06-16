var express = require('express');
var router = express.Router();

let blogData = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(blogData);
});

router.post('/', function(req, res, next) {
    const body = req.body;
    // Add a UUID to identify the blog entry
    body.id = Math.random().toString(36).substring(2, 15);
    body.date = new Date().toISOString();
    blogData.push(body);
    res.send(body);
});

router.get('/:postid', function(req, res, next) {
    const post = blogData.find(p => p.id === req.params.postid);
    res.send(post);
});

module.exports = router;

// Für die Datenstruktur wird ein JSON Objekt verwendet, da es viele einzelne Blogeeinträge gibt.
