module.exports = function(app) {
  var express = require('express');
  var timeseriesMonthlyreturnsingleseriesRouter = express.Router();

  timeseriesMonthlyreturnsingleseriesRouter.get('/', function(req, res) {
    res.send({
      'timeseries/monthlyreturnsingleseries': []
    });
  });

  timeseriesMonthlyreturnsingleseriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesMonthlyreturnsingleseriesRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturnsingleseries': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturnsingleseriesRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturnsingleseries': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturnsingleseriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries-monthlyreturnsingleseries', timeseriesMonthlyreturnsingleseriesRouter);
};
