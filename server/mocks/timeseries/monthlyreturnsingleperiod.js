module.exports = function(app) {
  var express = require('express');
  var timeseriesMonthlyreturnsingleperiodRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesMonthlyreturnsingleperiodRouter.get('/', function(req, res) {
   
    data({
      'period': 0,
      'groups': [
        'Insurance companies',
        'Internet, software & IT services',
        'Investment Fund',
        'Investment trusts/funds + pension funds',
        'Software & Programming',
        'Telecommunication',
        'Financial analytics software'
      ],
      'series': 'days',
      'min': 1.00,
      'max': 10.00
    },
    function(results) {

      res.send({
        'timeseries/monthlyreturnsingleperiod': results
      });
    });
  });

  timeseriesMonthlyreturnsingleperiodRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesMonthlyreturnsingleperiodRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturnsingleperiod': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturnsingleperiodRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturnsingleperiod': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturnsingleperiodRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/monthlyreturnsingleperiod', timeseriesMonthlyreturnsingleperiodRouter);
};
