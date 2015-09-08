module.exports = function(app) {
  var express = require('express');
  var timeseriesSamevaluegroupedRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesSamevaluegroupedRouter.get('/', function(req, res) {
   
    data({
      'period': 100,
      'groups': [
        'group One'
      ],
      'series': 'days',
      'min': 1.00,
      'max': 1.00
    },
    function(results) {

      res.send({
        'timeseries/samevaluegrouped': results
      });
    });
  });

  timeseriesSamevaluegroupedRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesSamevaluegroupedRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/samevaluegrouped': {
        id: req.params.id
      }
    });
  });

  timeseriesSamevaluegroupedRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/samevaluegrouped': {
        id: req.params.id
      }
    });
  });

  timeseriesSamevaluegroupedRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/samevaluegrouped', timeseriesSamevaluegroupedRouter);
};
