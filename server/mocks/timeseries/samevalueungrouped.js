module.exports = function(app) {
  var express = require('express');
  var timeseriesSamevalueungroupedRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesSamevalueungroupedRouter.get('/', function(req, res) {
   
    data({
      'period': 100,
      'series': 'days',
      'min': 1.00,
      'max': 1.00
    },
    function(results) {

      res.send({
        'timeseries/samevalueungrouped': results
      });
    });
  });

  timeseriesSamevalueungroupedRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesSamevalueungroupedRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/samevalueungrouped': {
        id: req.params.id
      }
    });
  });

  timeseriesSamevalueungroupedRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/samevalueungrouped': {
        id: req.params.id
      }
    });
  });

  timeseriesSamevalueungroupedRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/samevalueungrouped', timeseriesSamevalueungroupedRouter);
};
