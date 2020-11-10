
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
});

// router.get('/edit-user:id',(req,res)=>{
//   let userId=req.params.id
//   console.log(userId);
//   userHelper.getUserDetails().then((user)=>{
//     console.log(user);
//     res.render('/edit-user')
//   })
// })

router.get('/deleteUser/:id',(req,res)=>{
  console.log(req.params.id);
  let userId = req.params.id
  console.log(userId);
  userHelper.deleteUser(userId).then((response)=>{
    res.send(response);
  })
})

module.exports = router;
