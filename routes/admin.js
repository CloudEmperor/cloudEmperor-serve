var express = require('express');
var admin = require('../controllers/admin'); 

var router = express.Router();

router.post('/admin_login', admin.adminLogin); //用户登录

module.exports = router;

