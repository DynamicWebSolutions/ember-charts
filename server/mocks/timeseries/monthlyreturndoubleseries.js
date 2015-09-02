module.exports = function(app) {
  var express = require('express');
  var timeseriesMonthlyreturndoubleseriesRouter = express.Router();

  timeseriesMonthlyreturndoubleseriesRouter.get('/', function(req, res) {
    res.send({
      'timeseries/monthlyreturndoubleseries': []
    });
  });

  timeseriesMonthlyreturndoubleseriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesMonthlyreturndoubleseriesRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturndoubleseries': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturndoubleseriesRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/monthlyreturndoubleseries': {
        id: req.params.id
      }
    });
  });

  timeseriesMonthlyreturndoubleseriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries-monthlyreturndoubleseries', timeseriesMonthlyreturndoubleseriesRouter);
};
