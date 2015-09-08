module.exports = function(app) {
  var express = require('express');
  var timeseriesDailytwoseriesRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesDailytwoseriesRouter.get('/', function(req, res) {
    data({
      'period': 100,
      'groups': [
        'Group One',
        'Group Two',
      ],
      'series': 'days',
      'min': 4000,
      'max': 4400
    },
    function(results) {
      res.send({
        'timeseries/dailytwoseries': results
      });
    });
  });

  timeseriesDailytwoseriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesDailytwoseriesRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries.dailytwoseries': {
        id: req.params.id
      }
    });
  });

  timeseriesDailytwoseriesRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries.dailytwoseries': {
        id: req.params.id
      }
    });
  });

  timeseriesDailytwoseriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/dailytwoseries', timeseriesDailytwoseriesRouter);
};
