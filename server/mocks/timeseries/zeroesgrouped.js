module.exports = function(app) {
  var express = require('express');
  var timeseriesZeroesgroupedRouter = express.Router();

  timeseriesZeroesgroupedRouter.get('/', function(req, res) {
    res.send({
      'timeseries/zeroesgrouped': []
    });
  });

  timeseriesZeroesgroupedRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesZeroesgroupedRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/zeroesgrouped': {
        id: req.params.id
      }
    });
  });

  timeseriesZeroesgroupedRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/zeroesgrouped': {
        id: req.params.id
      }
    });
  });

  timeseriesZeroesgroupedRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries-zeroesgrouped', timeseriesZeroesgroupedRouter);
};
