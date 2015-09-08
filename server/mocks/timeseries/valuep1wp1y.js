module.exports = function(app) {
  var express = require('express');
  var timeseriesValuep1wp1yRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesValuep1wp1yRouter.get('/', function(req, res) {
    
    data({
      'period': 52,
      'series': 'weeks',
      'min': 142101731.98060158,
      'max': 149101731.98060158
    },
    function(results) {

      res.send({
        'timeseries/valuep1wp1y': results
      });
    });
  });

  timeseriesValuep1wp1yRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesValuep1wp1yRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/valuep1wp1y': {
        id: req.params.id
      }
    });
  });

  timeseriesValuep1wp1yRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/valuep1wp1y': {
        id: req.params.id
      }
    });
  });

  timeseriesValuep1wp1yRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/valuep1wp1y', timeseriesValuep1wp1yRouter);
};
