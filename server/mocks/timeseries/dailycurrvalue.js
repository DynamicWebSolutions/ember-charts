module.exports = function(app) {
  var express = require('express');
  var moment  = require('moment');
  var timeseriesDailycurrvalueRouter = express.Router();

  timeseriesDailycurrvalueRouter.get('/', function(req, res) {
    var data = function() {

      var mock = [],
          i = 0,
          start = moment().subtract('months', 2),
          end = moment();


      while (start <= end) {

        mock.push({
          id: i,
          time: moment(start).format('YYYY-MM-DD'),
          value: Math.random() * (4400 - 4000) + 4000
        });

        start.add('days', 1);

        i++;        
      }

      return mock;
    }

    res.send({
      'timeseries/dailycurrvalue': data()
    });
  });

  timeseriesDailycurrvalueRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  timeseriesDailycurrvalueRouter.get('/:id', function(req, res) {
    res.send({
      'timeseries/dailycurrvalue': {
        id: req.params.id
      }
    });
  });

  timeseriesDailycurrvalueRouter.put('/:id', function(req, res) {
    res.send({
      'timeseries/dailycurrvalue': {
        id: req.params.id
      }
    });
  });

  timeseriesDailycurrvalueRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/timeseries/dailycurrvalues', timeseriesDailycurrvalueRouter);
};
