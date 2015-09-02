module.exports = function(app) {
  var express = require('express');
  var timeseriesSamevaluegroupedRouter = express.Router();

  timeseriesSamevaluegroupedRouter.get('/', function(req, res) {
    res.send({
      'timeseries/samevaluegrouped': []
    });
  });

  timeseriesSamevaluegroupedRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesSamevaluegroupedRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/samevaluegrouped': {
        id: req.params.id
      }
    });
  });

  timeseriesSamevaluegroupedRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/samevaluegrouped': {
        id: req.params.id
      }
    });
  });

  timeseriesSamevaluegroupedRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries-samevaluegrouped', timeseriesSamevaluegroupedRouter);
};
