module.exports = function(app) {
  var express = require('express');
  var timeseriesMonthlyreturndoubleperiodRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesMonthlyreturndoubleperiodRouter.get('/', function(req, res) {
    
    data({
      'period': 13,
      'groups': [
        'Insurance companies',
        'Internet, software & IT services',
        'Investment Fund',
        'Investment trusts/funds + pension funds',
        'Software & Programming',
        'Telecommunication',
        'Financial analytics software'
      ],
      'series': 'months',
      'min': 1.00,
      'max': 10.00
    },
    function(results) {

      res.send({
        'timeseries/monthlyreturndoubleperiod': results
      });
    });
  });

  timeseriesMonthlyreturndoubleperiodRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesMonthlyreturndoubleperiodRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturndoubleperiod': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturndoubleperiodRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturndoubleperiod': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturndoubleperiodRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/monthlyreturndoubleperiod', timeseriesMonthlyreturndoubleperiodRouter);
};
