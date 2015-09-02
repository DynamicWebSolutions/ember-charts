module.exports = function(app) {
  var express = require('express');
  var timeseriesMonthlyreturnsingleperiodRouter = express.Router();

  timeseriesMonthlyreturnsingleperiodRouter.get('/', function(req, res) {
    res.send({
      'timeseries/monthlyreturnsingleperiod': []
    });
  });

  timeseriesMonthlyreturnsingleperiodRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesMonthlyreturnsingleperiodRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturnsingleperiod': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturnsingleperiodRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturnsingleperiod': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturnsingleperiodRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries-monthlyreturnsingleperiod', timeseriesMonthlyreturnsingleperiodRouter);
};
