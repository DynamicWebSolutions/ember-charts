module.exports = function(app) {
  var express = require('express');
  var timeseriesValuep1mp2yRouter = express.Router();

  timeseriesValuep1mp2yRouter.get('/', function(req, res) {
    res.send({
      'timeseries/valuep1mp2y': []
    });
  });

  timeseriesValuep1mp2yRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesValuep1mp2yRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/valuep1mp2y': {
        id: req.params.id
      }
    });
  });

  timeseriesValuep1mp2yRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/valuep1mp2y': {
        id: req.params.id
      }
    });
  });

  timeseriesValuep1mp2yRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries-valuep1mp2y', timeseriesValuep1mp2yRouter);
};
