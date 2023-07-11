var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    data = req.cookies[username]

    res.render('index', { title: 'Express',userData:data });

});

// router.get('/add', function(req, res) {
//     res.render('add', {});
// });
router.get('/login', function(req, res) {
    res.render('add', {});
});

// router.get('/meow_response', function(req, res) {
//     res.render('meow_response', {});
// });

router.post('/registrationpost', function(req, res) {
    // var Kitten = req.Kitten;
    res.cookie("username", req.body.username);
    console.log("called registrationpost : ",req.body); // PROBLEM: it returns empty, while I expect req.body
    res.redirect('/login');
});

module.exports = router;