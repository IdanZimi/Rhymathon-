const express = require('express');
let User = require('../Models/User');
const router = express.Router();

router.get('/:username', function (req, res) {
    User.find({userName:req.params.username}).populate('poems').exec(function (err, data) {
        if (err) {
            console.error(err)
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
})

router.post('/', function (req, res) {
    let username = req.body.username
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let imageUrl = req.body.imageUrl
    let NewUser = new User({ firstName: firstname, lastName: lastname, userName: username, imageUrl:imageUrl })
    NewUser.save(function (err, data) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.send(data);
      }
    })
  });

  module.exports = router;