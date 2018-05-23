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

/* GET /flat/form */
router.get('/:id/form', function (req, res) {
  Flatearth.findById(req.params.id)
    .then(function (evidence) {
      return res.render('form', { fact: evidence })
    })
})
/* PUT /flat/ */
router.put('/:id', function (req, res) {
  Flatearth.update(
    { evidence: req.body.evidence },
    { returning: true, where: { id: req.params.id } }
  )
    .then(function () {
      return res.redirect('/flat')
    })
})

/* POST flat/evidence */
router.post('/', function (req, res) {
  var fact = req.body.evidence
  Flatearth.create({ evidence: fact })
    .then(function () {
      res.redirect('/flat')
    })
})

/* DELETE flat/evidence/ */
router.delete('/:id', function (req, res) {
  Flatearth.findById(req.params.id)
    .then(function (fact) {
      fact.destroy()
      return res.redirect('/flat')
    })
})

module.exports = router;