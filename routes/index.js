var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node-app' });
});

router.post('/ville', function(req, res, next) {
  res.render('ville', { ville: req.body.nom_ville });
});

module.exports = router;
