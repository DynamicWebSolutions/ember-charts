module.exports = function(app) {
  var express = require('express');
  var timeseriesValuep1mp5yRouter = express.Router();

  timeseriesValuep1mp5yRouter.get('/', function(req, res) {
    res.send({
      'timeseries/valuep1mp5y': []
    });
  });

  timeseriesValuep1mp5yRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesValuep1mp5yRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/valuep1mp5y': {
        id: req.params.id
      }
    });
  });

  timeseriesValuep1mp5yRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/valuep1mp5y': {
        id: req.params.id
      }
    });
  });

  timeseriesValuep1mp5yRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries-valuep1mp5y', timeseriesValuep1mp5yRouter);
};
