var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/what', function(req, res) {
  res.send('Path: /what');
};

router.get('/new', function(req, res) {
  res.send('Path: /new');
};

module.exports = router;
