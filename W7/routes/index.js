var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mein Titel', name: 'Max Mustermann' });
});

router.get('/:yyyy/:mm/:dd', function(req, res, next) {
  const { yyyy, mm, dd } = req.params;
  res.render('index', { title: 'Datum', name: `${yyyy}-${mm}-${dd}` });
});

router.get('/names', function(req, res, next) {
  const { name } = req.query.name;
  res.render('index', { title: 'Name', name: name });
});

router.get('/:yyyy/:mm/:dd', function(req, res, next) {
  const { yyyy, mm, dd } = req.params;
  const { name } = req.query.names;
  res.render('index', { title: 'Datum', name: `${yyyy}-${mm}-${dd}`, name: name });
});

router.post('/post', function(req, res, next) {
  const { name } = req.body;
  console.log(req.body);
  console.log(name);
});

module.exports = router;
