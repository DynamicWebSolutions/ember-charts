module.exports = function(app) {
  var express = require('express');
  var timeseriesSamevalueungroupedRouter = express.Router();

  timeseriesSamevalueungroupedRouter.get('/', function(req, res) {
    res.send({
      'timeseries/samevalueungrouped': []
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

  app.use('/api/timeseries-samevalueungrouped', timeseriesSamevalueungroupedRouter);
};
