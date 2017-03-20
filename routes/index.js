var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/upload', function(req, res) {
    let metadata = {
        "size": req.file.size
    }
    res.send(JSON.stringify(metadata));
});

module.exports = router;
