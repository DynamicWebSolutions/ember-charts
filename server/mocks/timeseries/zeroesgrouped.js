module.exports = function(app) {
  var express = require('express');
  var timeseriesZeroesgroupedRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesZeroesgroupedRouter.get('/', function(req, res) {
 
    data({
      'period': 100,
      'groups': [
        'Group One'
      ],
      'series': 'days',
      'min': 0,
      'max': 0
    },
    function(results) {

      res.send({
        'timeseries/zeroesgrouped': results
      });
    });
  });

  timeseriesZeroesgroupedRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesZeroesgroupedRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/zeroesgrouped': {
        id: req.params.id
      }
    });
  });

  timeseriesZeroesgroupedRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/zeroesgrouped': {
        id: req.params.id
      }
    });
  });

  timeseriesZeroesgroupedRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/zeroesgrouped', timeseriesZeroesgroupedRouter);
};
