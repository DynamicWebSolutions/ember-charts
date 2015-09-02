module.exports = function(app) {
  var express = require('express');
  var timeseriesMonthlyreturndoubleperiodRouter = express.Router();

  timeseriesMonthlyreturndoubleperiodRouter.get('/', function(req, res) {
    res.send({
      'timeseries/monthlyreturndoubleperiod': []
    });
  });

  timeseriesMonthlyreturndoubleperiodRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesMonthlyreturndoubleperiodRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturndoubleperiod': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturndoubleperiodRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturndoubleperiod': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturndoubleperiodRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries-monthlyreturndoubleperiod', timeseriesMonthlyreturndoubleperiodRouter);
};
