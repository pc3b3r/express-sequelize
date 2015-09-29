var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  db.SA001.findAll().then(function (articles) {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.post('/test', function(req, res){
  console.log(req.body);
  var sa = db.SA001.create(req.body).then(function(created){
    db.SA001('/test')
    res.send(created)
  }).error(function(error){
    res.send(error);
  });
})
