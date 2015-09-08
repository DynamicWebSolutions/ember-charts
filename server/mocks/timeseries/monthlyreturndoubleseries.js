module.exports = function(app) {
  var express = require('express');
  var timeseriesMonthlyreturndoubleseriesRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesMonthlyreturndoubleseriesRouter.get('/', function(req, res) {
    
    data({
      'period': 13,
      'groups': [
        'Software & Programming',
        'Telecommunication'
      ],
      'series': 'months',
      'min': 1000,
      'max': 20000
    },
    function(results) {

      res.send({
        'timeseries/monthlyreturndoubleseries': results
      });
    });
  });

  timeseriesMonthlyreturndoubleseriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesMonthlyreturndoubleseriesRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturndoubleseries': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturndoubleseriesRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturndoubleseries': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturndoubleseriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/monthlyreturndoubleseries', timeseriesMonthlyreturndoubleseriesRouter);
};
