module.exports = function(app) {
  var express = require('express');
  var moment  = require('moment');  
  var timeseriesDailyfiveseriesRouter = express.Router();

  timeseriesDailyfiveseriesRouter.get('/', function(req, res) {
    var data = function() {

      var mock = [],
          groups = ['Group One', 'Group Two', 'Group Three', 'Group Four'],
          i = 0,
          start = moment().subtract('months', 2),
          end = moment();

      while (start <= end) {

        groups.forEach(function(group) {

            mock.push({
              id: i,
              label: group,
              time: moment(start).format('YYYY-MM-DD'),
              value: Math.random() * (4000 - 4400) + 4000
            });

            i++;        
          
        });

        start.add('days', 1);

      }

      return mock;
    }   

    res.send({
      'timeseries/dailyfiveseries': data()
    });
  });

  app.use('/api/timeseries/dailyfiveseries', timeseriesDailyfiveseriesRouter);
};
