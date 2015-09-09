module.exports = function(app) {
  var express = require('express');
  var singlegroupHighnetworthdurationRouter = express.Router();

  singlegroupHighnetworthdurationRouter.get('/', function(req, res) {
    res.send({
      'singlegroup/highnetworthduration': [
        {
          id: 1, label: "Not Applicable (Modified Duration)",
          value: 369353.20417884,
          type: "money"
        }, {
          id: 2, label: "2.0 to 4.0",
          value: 39913.94838165567,
          type: "money"
        }, {
          id: 3, label: "4.0 to 6.0",
          value: 747144.6821651033,
          type: "money"
        }, {
          id: 4, label: "6.0 to 8.0",
          value: 1107289.153444018,
          type: "money"
        }, {
          id: 5, label: "8.0 to 10.0",
          value: 784442.9734556648,
          type: "money"
        }, {
          id: 6, label: "10.0 to 12.0",
          value: 314798.6861845985,
          type: "money"
        }, {
          id: 7, label: "12.0 to 14.0",
          value: 132820.13222065035,
          type: "money"
        }, {
          id: 8, label: "14.0 to 16.0",
          value: 180545.78853177986,
          type: "money"
        }
      ]
    });
  });

  singlegroupHighnetworthdurationRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  singlegroupHighnetworthdurationRouter.get('/:id', function(req, res) {
    res.send({
      'singlegroup/highnetworthduration': {
        id: req.params.id
      }
    });
  });

  singlegroupHighnetworthdurationRouter.put('/:id', function(req, res) {
    res.send({
      'singlegroup/highnetworthduration': {
        id: req.params.id
      }
    });
  });

  singlegroupHighnetworthdurationRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/singlegroup/highnetworthduration', singlegroupHighnetworthdurationRouter);
};
