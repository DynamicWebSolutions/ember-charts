module.exports = function(app) {
  var express = require('express');
  var moment  = require('moment');
  var timeseriesDailycurrvalueRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesDailycurrvalueRouter.get('/', function(req, res) {

    data({
      'period': 100,
      'series': 'days',
      'min': 4000,
      'max': 4400
    }, 
    function(results) {
      res.send({
        'timeseries/dailycurrvalue': results
      });
    });

  });

  timeseriesDailycurrvalueRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesDailycurrvalueRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/dailycurrvalue': {
        id: req.params.id
      }
    });
  });

  timeseriesDailycurrvalueRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/dailycurrvalue': {
        id: req.params.id
      }
    });
  });

  timeseriesDailycurrvalueRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/dailycurrvalue', timeseriesDailycurrvalueRouter);
};
