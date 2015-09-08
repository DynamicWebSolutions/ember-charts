module.exports = function(app) {
  var express = require('express');
  var timeseriesZeroesungroupedRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesZeroesungroupedRouter.get('/', function(req, res) {
  
    data({
      'period': 100,
      'series': 'days',
      'min': 0,
      'max': 0
    },
    function(results) {

      res.send({
        'timeseries/zeroesungrouped': results
      });
    });
  });

  timeseriesZeroesungroupedRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesZeroesungroupedRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/zeroesungrouped': {
        id: req.params.id
      }
    });
  });

  timeseriesZeroesungroupedRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/zeroesungrouped': {
        id: req.params.id
      }
    });
  });

  timeseriesZeroesungroupedRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/zeroesungrouped', timeseriesZeroesungroupedRouter);
};
