module.exports = function(app) {
  var express = require('express');
  var timeseriesDailythreeseriesRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesDailythreeseriesRouter.get('/', function(req, res) {

    data({
      'period': 100,
      'groups': [
        'Group One',
        'Group Two',
        'Group Three'
      ],
      'series': 'days',
      'min': 4000,
      'max': 4400
    },
    function(results) {
      res.send({
        'timeseries/dailythreeseries': results
      });
    });
  });

  timeseriesDailythreeseriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesDailythreeseriesRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/dailythreeseries': {
        id: req.params.id
      }
    });
  });

  timeseriesDailythreeseriesRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/dailythreeseries': {
        id: req.params.id
      }
    });
  });

  timeseriesDailythreeseriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/dailythreeseries', timeseriesDailythreeseriesRouter);
};
