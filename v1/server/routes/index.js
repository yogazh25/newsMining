var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index.html", { root: path.join(__dirname, '../../client/build/') });
});

module.exports = router;