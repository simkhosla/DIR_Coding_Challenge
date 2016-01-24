var express = require('express');
var router = express.Router();
var model = require('../models/response');

/* GET to get all survey responses */
router.get('/all', function(req, res, next) {
  model.find(function(err, responses) {
    if (err) console.log('there was an error of '+ err);
    res.json(responses);
    })
});

/* POST to make a new entry. */
router.post('/create', function(req, res, next) {
  console.log(req.body); //log out all responses
  model.create(req.body, function(err, response) {
    if (err) console.log(err);
    res.redirect("/thankyou");
  })
});

/* GET response by id */
router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, response) {
    if (err) console.log('there was an error of '+ err);
    res.json(response);
    })
});


/* UPDATE response by id */
router.put('/:id', function(req, res) {
  console.log(req.params);
  model.findByIdAndUpdate(req.params.id, req.params, function(err, response) {
    if (err) console.log('there was an error of ' + err);
    res.json({"Message": "Your object was updated"});
  });

});

router.patch('/:id', function(req, res) {
  console.log(req.body);
  model.findByIdAndUpdate(req.params.id, req.body, function(err, response) {
    if (err) console.log('there was an error of ' + err);
    res.json({"Message": "Your object was updated"});
  });

});


/* DELETE response by id */

router.delete('/:id', function(req, res) {
  console.log(req.body);
  model.findByIdAndRemove(req.params.id, req.params, function(err, response) {
      if (err) console.log('there was an error of ' + err);
      res.json({"Message": "Your object was updated"});
  });

});


module.exports = router;
