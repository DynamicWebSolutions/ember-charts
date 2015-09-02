module.exports = function(app) {
  var express = require('express');
  var timeseriesMonthlyreturnnegativeperiodRouter = express.Router();

  timeseriesMonthlyreturnnegativeperiodRouter.get('/', function(req, res) {
    res.send({
      'timeseries/monthlyreturnnegativeperiod': []
    });
  });

  timeseriesMonthlyreturnnegativeperiodRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesMonthlyreturnnegativeperiodRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturnnegativeperiod': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturnnegativeperiodRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturnnegativeperiod': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturnnegativeperiodRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries-monthlyreturnnegativeperiod', timeseriesMonthlyreturnnegativeperiodRouter);
};
