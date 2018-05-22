var express = require('express');
var router = express.Router();
var Flatearth = require('../models').Flatearth;

var evidence = [
  {id: 1, fact: "The world doesn't LOOK round."},
  {id: 2, fact: "Scientists are liars."},
  {id: 3, fact: "Obama."}
]
/* GET evidence. */
router.get('/', function(req, res) {
  res.render('flat', {fact: evidence});
});

router.get('/form', function(req, res) {
  res.render('form');
});


/* POST /evidence */
router.post('/', function (req, res) {
  var fact = req.body.fact
  Flatearth.create({ fact: fact })
    .then(function () {
      res.redirect('/evidence')
    })
})


module.exports = router;