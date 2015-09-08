module.exports = function(app) {
  var express = require('express');
  var singlegroupZeroRouter = express.Router();

  singlegroupZeroRouter.get('/', function(req, res) {
    res.send({
      'singlegroup/zero': []
    });
  });

  singlegroupZeroRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  singlegroupZeroRouter.get('/:id', function(req, res) {
    res.send({
      'singlegroup/zero': {
        id: req.params.id
      }
    });
  });

  singlegroupZeroRouter.put('/:id', function(req, res) {
    res.send({
      'singlegroup/zero': {
        id: req.params.id
      }
    });
  });

  singlegroupZeroRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/singlegroup-zero', singlegroupZeroRouter);
};
