const express = require('express');
const app = express();
const router = express.Router();
const PORT = 3000;

// Multiple routing
router.route('/user')
    .get(function (req, res, next) {
        console.log("GET request called");
        res.end();
    })
    .post(function (req, res, next) {
        console.log("POST request called", next);
        res.end();
    })
    .put(function (req, res, next) {
        console.log("PUT request called");
        res.end();
    });

app.use(router);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
})
