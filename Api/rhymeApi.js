const express = require('express');
let Rhyme = require('../Models/Rhyme');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', function (req, res) {
    let word = req.body.word
    let title = req.body.title
    let userName = req.body.userName
    let lines = req.body.lines
    let rhyme = new Rhyme({ wordSearched: word, title: title, userName: userName, lyrics:lines })
    rhyme.save(function (error, rhyme) {
        if (error) return res.status(500).send(error)
        else{res.send(rhyme)}
    })
})
router.get('/', function (req, res) {
    Rhyme.find({}).exec(function (err, data) {
        if (err) {
            console.error(err)
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
})
router.get('/deletePoem/:id', function (req, res) {
    console.log(req.body)
    Rhyme.findByIdAndDelete(req.params.id).exec(function (err, data) {
        if (err) {
            console.error(err)
            res.status(500).send(err)
        } else {
            res.send()
        }
    })
})
router.get('/send/:emailTo/:content', function (req,res){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mamitut3@gmail.com',
          pass: '15123123'
        }
      });
      
      var mailOptions = {
        from: 'mamitut3@gmail.com',
        to: req.params.emailTo,
        subject: 'You got a new Freaky Poem!',
        text: req.params.content
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.status(500).send(error)
        } else {
          res.send('Email sent: ' + info.response);
        send}
      });
})
module.exports = router;