module.exports = function(app) {
  var express = require('express');
  var moment  = require('moment');
  var timeseriesDailydiffvalueRouter = express.Router();
  var data = require('../../generators/timeseries');


  timeseriesDailydiffvalueRouter.get('/', function(req, res) {

    data({
      'period': 100,
      'series': 'days',
      'min': 4400,
      'max': 4000
    }, 
    function(results) {
      res.send({
        'timeseries/dailydiffvalue': results
      });
    });
  });


  app.use('/api/timeseries/dailydiffvalue', timeseriesDailydiffvalueRouter);
};
