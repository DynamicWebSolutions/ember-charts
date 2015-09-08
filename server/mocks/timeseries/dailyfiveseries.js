module.exports = function(app) {
  var express = require('express');
  var moment  = require('moment');  
  var timeseriesDailyfiveseriesRouter = express.Router();
  var data = require('../../generators/timeseries');

  timeseriesDailyfiveseriesRouter.get('/', function(req, res) {

    data({
      'period': 100,
      'groups': [
        'Group One',
        'Group Two',
        'Group Three',
        'Group Four',
        'Group Five'
      ],
      'series': 'days',
      'min': 4000,
      'max': 4400
    },
    function(results) {
      res.send({
        'timeseries/dailyfiveseries': results
      });
    });

  });

  app.use('/api/timeseries/dailyfiveseries', timeseriesDailyfiveseriesRouter);
};
