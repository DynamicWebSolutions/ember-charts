module.exports = function(app) {
  var express = require('express');
  var multivalueUngroupedzeroRouter = express.Router();

  multivalueUngroupedzeroRouter.get('/', function(req, res) {
    res.send({
      'multivalue/ungroupedzero': [
        {
          id: 1,
          xValue: 0,
          yValue: 0 
        }
      ]
    });
  });

  multivalueUngroupedzeroRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  multivalueUngroupedzeroRouter.get('/:id', function(req, res) {
    res.send({
      'multivalue/ungroupedzero': {
        id: req.params.id
      }
    });
  });

  multivalueUngroupedzeroRouter.put('/:id', function(req, res) {
    res.send({
      'multivalue/ungroupedzero': {
        id: req.params.id
      }
    });
  });

  multivalueUngroupedzeroRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/multivalue/ungroupedzero', multivalueUngroupedzeroRouter);
};
