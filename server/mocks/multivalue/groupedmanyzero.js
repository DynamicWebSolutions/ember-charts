module.exports = function(app) {
  var express = require('express');
  var multivalueGroupedzerosRouter = express.Router();

  multivalueGroupedzerosRouter.get('/', function(req, res) {
    res.send({
      'multivalue/groupedmanyzero': [
        {
          id: 1, group: "Energy",
          xValue: 0,
          yValue: 0
        }, {
          id: 2, group: "Industrial Metals",
          xValue: 0,
          yValue: 0
        }, {
          id: 3, group: "Municipal Bonds",
          xValue: 0,
          yValue: 0
        }, {
          id: 4, group: "Precious Metals",
          xValue: 0,
          yValue: 0
        }, {
          id: 5, group: "Real Estate",
          xValue: 0,
          yValue: 0
        }, {
          id: 6, group: "Venture",
          xValue: 0,
          yValue: 0
        }
      ]
    });
  });

  multivalueGroupedzerosRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  multivalueGroupedzerosRouter.get('/:id', function(req, res) {
    res.send({
      'multivalue/groupedzeros': {
        id: req.params.id
      }
    });
  });

  multivalueGroupedzerosRouter.put('/:id', function(req, res) {
    res.send({
      'multivalue/groupedzeros': {
        id: req.params.id
      }
    });
  });

  multivalueGroupedzerosRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/multivalue/groupedmanyzero', multivalueGroupedzerosRouter);
};
