var express = require('express');
var router = express.Router();
var data = require('../data/peoples.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/our-work', function (req, res, next) {
  res.render('our-work', { title: 'Our Work' });
});

router.get('/our-team', function (req, res, next) {
  res.render('our-team', { title: 'Our Team' });
});


// SEND DATA
// router.get('/our-people', function (req, res, next) {
//   var dataToEjs = {
//     title: 'Our People ',
//     peoples: data
//   };
//   res.render('our-people', dataToEjs);
// });

// router.get('/our-people/:personNAME', function (req, res, next) {
//   const person = data.myPeoples.filter(e => e.url === req.params.personNAME);
//   if (!person.length) {
//     return res.redirect('../our-people');
//   } else{
//     var urlName = person[0].name;
//     res.render('people-detail', { title:  ` ${urlName}` , name: req.params.url, person: person[0] });
//   }
// });


module.exports = router;
