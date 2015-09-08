module.exports = function(app) {
  var express = require('express');
  var timeseriesValuep1dp1yRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesValuep1dp1yRouter.get('/', function(req, res) {
    
    data({
      'period': 366,
      'series': 'days',
      'min': 142101731.98060158,
      'max': 149101731.98060158
    },
    function(results) {

      res.send({
        'timeseries/valuep1dp1y': results
      });
    });
  });

  timeseriesValuep1dp1yRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesValuep1dp1yRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/valuep1dp1y': {
        id: req.params.id
      }
    });
  });

  timeseriesValuep1dp1yRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/valuep1dp1y': {
        id: req.params.id
      }
    });
  });

  timeseriesValuep1dp1yRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/valuep1dp1y', timeseriesValuep1dp1yRouter);
};
