var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	//req.session.un = null;
	res.clearCookie('username');
	res.redirect('/blog');
});

module.exports = router;


