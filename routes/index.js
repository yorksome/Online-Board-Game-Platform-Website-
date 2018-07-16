var express = require('express');
var router = express.Router();

router.get('/', function (req, res,next) {
  var user = req.session.user;
  res.render('index',{user:user});
});

module.exports = router; //exports router object
