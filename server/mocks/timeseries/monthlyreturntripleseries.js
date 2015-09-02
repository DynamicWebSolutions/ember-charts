module.exports = function(app) {
  var express = require('express');
  var timeseriesMonthlyreturntripleseriesRouter = express.Router();

  timeseriesMonthlyreturntripleseriesRouter.get('/', function(req, res) {
    res.send({
      'timeseries/monthlyreturntripleseries': []
    });
  });

  timeseriesMonthlyreturntripleseriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesMonthlyreturntripleseriesRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturntripleseries': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturntripleseriesRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturntripleseries': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturntripleseriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries-monthlyreturntripleseries', timeseriesMonthlyreturntripleseriesRouter);
};
