var express = require('express');
var router = express.Router();
var Flatearth = require('../models').Flatearth;

// var evidence = [
//   {id: 1, evidence: "The world doesn't LOOK round."},
//   {id: 2, evidence: "Scientists are liars."},
//   {id: 3, evidence: "Obama."}
// ]

/* GET evidence. */
router.get('/', function(req, res) {
  Flatearth.all()
  .then(function (evidence) {
    res.render('flat', {fact: evidence});
  })
});

/* POST /evidence */
router.post('/', function (req, res) {
  var fact = req.body.evidence
  Flatearth.create({ evidence: fact })
    .then(function () {
      res.redirect('/flat')
    })
})

/* DELETE /evidence/ */
router.delete('/:id', function (req, res) {
  Flatearth.findById(req.params.id)
    .then(function (fact) {
      fact.destroy()
      return res.redirect('/flat')
    })
})

router.get('/form', function(req, res) {
  res.render('form');
});




module.exports = router;