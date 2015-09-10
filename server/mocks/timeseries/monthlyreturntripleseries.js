module.exports = function(app) {
  var express = require('express');
  var timeseriesMonthlyreturntripleseriesRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesMonthlyreturntripleseriesRouter.get('/', function(req, res) {
 
    data({
      'period': 13,
      'groups': [
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
        'timeseries/monthlyreturntripleseries': results
      });
    });
  });

  timeseriesMonthlyreturntripleseriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesMonthlyreturntripleseriesRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturntripleseries': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturntripleseriesRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturntripleseries': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturntripleseriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/monthlyreturntripleseries', timeseriesMonthlyreturntripleseriesRouter);
};
