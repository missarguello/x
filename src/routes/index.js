const express = require('express');
const noticia = require('../controllers/News');
const router = express.Router();
const clasen = require("../controllers/News")
var clase_news;

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/upload', function(req, res) {
    res.render('upload');
});

router.post('/upload', function(req, res) {
    clase_news = new noticia(req, res)
    clase_news.crear(req, res)

    //fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1]);
    //console.log(req.file)
    res.send('uploaded');
});

module.exports = router;