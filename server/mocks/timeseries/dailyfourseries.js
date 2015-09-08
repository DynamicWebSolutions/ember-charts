module.exports = function(app) {
  var express = require('express');
  var timeseriesDailyfourseriesRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesDailyfourseriesRouter.get('/', function(req, res) {

    data({
      'period': 100,
      'groups': [
        'Group One',
        'Group Two',
        'Group Three',
        'Group Four'
      ],
      'series': 'days',
      'min': 4000,
      'max': 4400
    },
    function(results) {
      res.send({
        'timeseries/dailyfourseries': results
      });
    });

  });

  timeseriesDailyfourseriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesDailyfourseriesRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/dailyfourseries': {
        id: req.params.id
      }
    });
  });

  timeseriesDailyfourseriesRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/dailyfourseries': {
        id: req.params.id
      }
    });
  });

  timeseriesDailyfourseriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/dailyfourseries', timeseriesDailyfourseriesRouter);
};
