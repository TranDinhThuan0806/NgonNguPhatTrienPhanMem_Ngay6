var express = require('express');
var router = express.Router();
let userController = require('../controllers/users')
let {RegisterValidator,handleResultValidator} = require('../utils/validatorHandler')
/* GET home page. */
router.post('/register',RegisterValidator,handleResultValidator, async function (req, res, next) {
    let newUser = userController.CreateAnUser(
        req.body.username,
        req.body.password,
        req.body.email,
        "69aa8360450df994c1ce6c4c"
    );
    await newUser.save()
    res.send({
        message: "dang ki thanh cong"
    })
});

module.exports = router;
