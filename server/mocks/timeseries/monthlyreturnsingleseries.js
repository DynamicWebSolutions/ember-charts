module.exports = function(app) {
  var express = require('express');
  var timeseriesMonthlyreturnsingleseriesRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesMonthlyreturnsingleseriesRouter.get('/', function(req, res) {
    
    data({
      'period': 0,
      'groups': [
        'Software & Programming',
        'Telecommunication'
      ],
      'series': 'days',
      'min': 1.00,
      'max': 10.00
    },
    function(results) {

      res.send({
        'timeseries/monthlyreturnsingleseries': results
      });
    });
  });

  timeseriesMonthlyreturnsingleseriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesMonthlyreturnsingleseriesRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturnsingleseries': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturnsingleseriesRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturnsingleseries': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturnsingleseriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/monthlyreturnsingleseries', timeseriesMonthlyreturnsingleseriesRouter);
};
