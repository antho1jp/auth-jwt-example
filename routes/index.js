const express = require('express'),
    router = express.Router(),
    auth = require('../app_modules/auth');

router.get('/', (req,res) => {
    res.send('Hello World')
})

router.get('/protected', auth, (req, res) => {
    if(!req.user.admin)return res.sendStatus(401);
    
    res.send('Ok');
})

module.exports = router;