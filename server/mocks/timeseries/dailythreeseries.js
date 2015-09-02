module.exports = function(app) {
  var express = require('express');
  var timeseriesDailythreeseriesRouter = express.Router();

  timeseriesDailythreeseriesRouter.get('/', function(req, res) {
    res.send({
      'timeseries/dailythreeseries': []
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

  app.use('/api/timeseries-dailythreeseries', timeseriesDailythreeseriesRouter);
};
