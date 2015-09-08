module.exports = function(app) {
  var express = require('express');
  var singlegroupZeroesRouter = express.Router();

  singlegroupZeroesRouter.get('/', function(req, res) {
    res.send({
      'singlegroup/zeroes': []
    });
  });

  singlegroupZeroesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  singlegroupZeroesRouter.get('/:id', function(req, res) {
    res.send({
      'singlegroup/zeroes': {
        id: req.params.id
      }
    });
  });

  singlegroupZeroesRouter.put('/:id', function(req, res) {
    res.send({
      'singlegroup/zeroes': {
        id: req.params.id
      }
    });
  });

  singlegroupZeroesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/singlegroup-zeroes', singlegroupZeroesRouter);
};
