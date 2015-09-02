module.exports = function(app) {
  var express = require('express');
  var moment  = require('moment');
  var timeseriesDailydiffvalueRouter = express.Router();

  timeseriesDailydiffvalueRouter.get('/', function(req, res) {
    var data = function() {

      var mock = [],
          i = 0,
          start = moment().subtract('months', 2),
          end = moment();


      while (start <= end) {

        mock.push({
          id: i,
          time: moment(start).format('YYYY-MM-DD'),
          value: Math.random() * (4000 - 4400) + 4000
        });

        start.add('days', 1);

        i++;        
      }

      return mock;
    }   

    res.send({
      'timeseries/dailydiffvalue': data()
    });
  });


  app.use('/api/timeseries/dailydiffvalues', timeseriesDailydiffvalueRouter);
};
