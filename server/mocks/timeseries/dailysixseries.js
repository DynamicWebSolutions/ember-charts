module.exports = function(app) {
  var express = require('express');
  var timeseriesDailysixseriesRouter = express.Router();

  timeseriesDailysixseriesRouter.get('/', function(req, res) {
    res.send({
      'timeseries/dailysixseries': []
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

  app.use('/api/timeseries-dailysixseries', timeseriesDailysixseriesRouter);
};
