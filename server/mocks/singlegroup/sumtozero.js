module.exports = function(app) {
  var express = require('express');
  var singlegroupSumtozeroRouter = express.Router();

  singlegroupSumtozeroRouter.get('/', function(req, res) {
    res.send({
      'singlegroup/sumtozero': []
    });
  });

  singlegroupSumtozeroRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  singlegroupSumtozeroRouter.get('/:id', function(req, res) {
    res.send({
      'singlegroup/sumtozero': {
        id: req.params.id
      }
    });
  });

  singlegroupSumtozeroRouter.put('/:id', function(req, res) {
    res.send({
      'singlegroup/sumtozero': {
        id: req.params.id
      }
    });
  });

  singlegroupSumtozeroRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/singlegroup-sumtozero', singlegroupSumtozeroRouter);
};
