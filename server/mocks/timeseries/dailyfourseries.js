module.exports = function(app) {
  var express = require('express');
  var timeseriesDailyfourseriesRouter = express.Router();

  timeseriesDailyfourseriesRouter.get('/', function(req, res) {
    res.send({
      'timeseries/dailyfourseries': []
    });
  });

  timeseriesDailyfourseriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesDailyfourseriesRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/dailyfourseries': {
        id: req.params.id
      }
    });
  });

  timeseriesDailyfourseriesRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/dailyfourseries': {
        id: req.params.id
      }
    });
  });

  timeseriesDailyfourseriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries-dailyfourseries', timeseriesDailyfourseriesRouter);
};
