module.exports = function(app) {
  var express = require('express');
  var timeseriesMonthlyreturnnegativeperiodRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesMonthlyreturnnegativeperiodRouter.get('/', function(req, res) {
    
    data({
      'period': 13,
      'groups': [
        'Software & Programming',
        'Telecommunication'
      ],
      'series': 'months',
      'min': -10.00,
      'max': 10.00
    },
    function(results) {

      res.send({
        'timeseries/monthlyreturnnegativeperiod': results
      });
    });
  });

  timeseriesMonthlyreturnnegativeperiodRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesMonthlyreturnnegativeperiodRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturnnegativeperiod': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturnnegativeperiodRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturnnegativeperiod': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturnnegativeperiodRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/monthlyreturnnegativeperiod', timeseriesMonthlyreturnnegativeperiodRouter);
};
