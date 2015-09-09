module.exports = function(app) {
  var express = require('express');
  var multivalueGroupedzeroRouter = express.Router();

  multivalueGroupedzeroRouter.get('/', function(req, res) {
    res.send({
      'multivalue/groupedzero': [
        {
          id: 1,
          group: "Cash",
          xValue: 0,
          yValue: 0  
        }
      ]
    });
  });

  multivalueGroupedzeroRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  multivalueGroupedzeroRouter.get('/:id', function(req, res) {
    res.send({
      'multivalue/groupedzero': {
        id: req.params.id
      }
    });
  });

  multivalueGroupedzeroRouter.put('/:id', function(req, res) {
    res.send({
      'multivalue/groupedzero': {
        id: req.params.id
      }
    });
  });

  multivalueGroupedzeroRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/multivalue/groupedzero', multivalueGroupedzeroRouter);
};
