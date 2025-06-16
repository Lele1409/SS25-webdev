var express = require('express');
const fs = require('fs');
var router = express.Router();

// create ./models/blog.json with an empty array if it doesn't exist
if (!fs.existsSync('./model/blog.json')) {
  fs.mkdirSync('./model', { recursive: true });
  fs.writeFileSync('./model/blog.json', '[]');
}

let blogData;

try {
  blogData = JSON.parse(fs.readFileSync('./model/blog.json', 'utf8'));
} catch (error) {
  console.error('Error reading blog data:', error);
  blogData = [];
  process.exit(1);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(blogData);
});

router.post('/', function(req, res, next) {
    const body = req.body;
    // Check if the body has the required fields
    if (!body.title || !body.author || !body.text) {
        return res.status(400).json({ error: 'Title and author and text are required' });
    }
    // Add a UUID to identify the blog entry
    body.id = Math.random().toString(36).substring(2, 15);
    body.date = new Date().toISOString();
    blogData.push(body);
    fs.writeFileSync('./model/blog.json', JSON.stringify(blogData, null, 2));
    res.json(body);
});

// http://localhost:3000/blog/newpost
router.get('/newpost', function(req, res, next) {
    console.log('GET /blog/newpost');
    res.render('newPost', { title: 'Neuer Blogeintrag' });
});

router.get('/:postid', function(req, res, next) {
    const post = blogData.find(p => p.id === req.params.postid);
    res.json(post);
});

module.exports = router;

// Für die Datenstruktur wird ein JSON Objekt verwendet, da es viele einzelne Blogeeinträge gibt.
