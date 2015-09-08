module.exports = function(app) {
  var express = require('express');
  var timeseriesDailysixseriesRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesDailysixseriesRouter.get('/', function(req, res) {

    data({
      'period': 100,
      'groups': [
        'Group One',
        'Group Two',
        'Group Three',
        'Group Four',
        'Group Five',
        'Group Six'
      ],
      'series': 'days',
      'min': 4000,
      'max': 4400
    },
    function(results) {
      res.send({
        'timeseries/dailysixseries': results
      });
    });
  });

  timeseriesDailysixseriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesDailysixseriesRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/dailysixseries': {
        id: req.params.id
      }
    });
  });

  timeseriesDailysixseriesRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/dailysixseries': {
        id: req.params.id
      }
    });
  });

  timeseriesDailysixseriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/dailysixseries', timeseriesDailysixseriesRouter);
};
