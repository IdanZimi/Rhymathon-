const express = require('express');
let Rhyme = require('../Models/Rhyme');
let User = require('../Models/User');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', function (req, res) {
    let word = req.body.word
    let title = req.body.title
    let userName = req.body.userName
    let lines = req.body.lines
    let userId = req.body.userId
    let rhyme = new Rhyme({ wordSearched: word, title: title, userName: userName, lyrics: lines })
    rhyme.save(function (error, rhyme) {
        if (error) return res.status(500).send(error)
        else {
            User.findByIdAndUpdate(userId, { $push: { "poems": rhyme._id } }).exec((error) => {
                if (error) return res.status(500).send(error)
                else {

                    res.send(rhyme)
                }
            })
        }
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


router.get('/send/:emailTo/:content', function (req, res) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'myfreakypoem@gmail.com',
            pass: 'rhymathon123'
        }
    });

    var mailOptions = {
        from: 'myfreakypoem@gmail.com',
        to: req.params.emailTo,
        subject: 'You got a new Freaky Poem!',
        text: req.params.content
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.status(500).send(error)
        } else {
            res.send('Email sent: ' + info.response);
            send
        }
    });
})
module.exports = router;