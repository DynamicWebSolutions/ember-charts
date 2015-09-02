module.exports = function(app) {
  var express = require('express');
  var timeseriesPopulationRouter = express.Router();

  timeseriesPopulationRouter.get('/', function(req, res) {
    res.send({
      'timeseries/population': []
    });
  });

  timeseriesPopulationRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesPopulationRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/population': {
        id: req.params.id
      }
    });
  });

  timeseriesPopulationRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/population': {
        id: req.params.id
      }
    });
  });

  timeseriesPopulationRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries-population', timeseriesPopulationRouter);
};
