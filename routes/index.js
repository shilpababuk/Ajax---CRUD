
var express = require('express');
const { response } = require('../app');
var router = express.Router();
const userHelper = require('../helpers/user-helper')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ title: 'Ajax CRUD' });
});

router.post('/adduser',(req,res)=>{
  //console.log(req.body);
  userHelper.addUser(req.body).then((response)=>{
    // console.log(req.body);
    // console.log(response);
    res.send(response)
  })
});

router.get('/allUsers',(req, res)=>{
  // console.log(users);
  userHelper.getAllUsers().then((users)=>{
    res.status(200).send(users);
  })
})

module.exports = router;
