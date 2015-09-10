module.exports = function(app) {
  var express = require('express');
  var multivalueUngroupedzerosRouter = express.Router();

  multivalueUngroupedzerosRouter.get('/', function(req, res) {
    res.send({
      'multivalue/ungroupedmanyzero': [
        {
          id: 1, xValue: 0,
          yValue: 0
        }, {
          id: 2, xValue: 0,
          yValue: 0
        }, {
          id: 3, xValue: 0,
          yValue: 0
        }, {
          id: 4, xValue: 0,
          yValue: 0
        }, {
          id: 5, xValue: 0,
          yValue: 0
        }, {
          id: 6, xValue: 0,
          yValue: 0
        }
      ]
    });
  });

  multivalueUngroupedzerosRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  multivalueUngroupedzerosRouter.get('/:id', function(req, res) {
    res.send({
      'multivalue/ungroupedzeros': {
        id: req.params.id
      }
    });
  });

  multivalueUngroupedzerosRouter.put('/:id', function(req, res) {
    res.send({
      'multivalue/ungroupedzeros': {
        id: req.params.id
      }
    });
  });

  multivalueUngroupedzerosRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/multivalue/ungroupedmanyzero', multivalueUngroupedzerosRouter);
};
