module.exports = function(app) {
  var express = require('express');
  var timeseriesValuep1mp1yRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesValuep1mp1yRouter.get('/', function(req, res) {
    
    data({
      'period': 13,
      'series': 'months',
      'min': 142101731.98060158,
      'max': 149101731.98060158
    },
    function(results) {

      res.send({
        'timeseries/valuep1mp1y': results
      });
    });
  });

  timeseriesValuep1mp1yRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesValuep1mp1yRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/valuep1mp1y': {
        id: req.params.id
      }
    });
  });

  timeseriesValuep1mp1yRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/valuep1mp1y': {
        id: req.params.id
      }
    });
  });

  timeseriesValuep1mp1yRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/valuep1mp1y', timeseriesValuep1mp1yRouter);
};
