module.exports = function(app) {
  var express = require('express');
  var singlegroupManyvaluesRouter = express.Router();

  singlegroupManyvaluesRouter.get('/', function(req, res) {
    res.send({
      'singlegroup/manyvalues': []
    });
  });

  singlegroupManyvaluesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  singlegroupManyvaluesRouter.get('/:id', function(req, res) {
    res.send({
      'singlegroup/manyvalues': {
        id: req.params.id
      }
    });
  });

  singlegroupManyvaluesRouter.put('/:id', function(req, res) {
    res.send({
      'singlegroup/manyvalues': {
        id: req.params.id
      }
    });
  });

  singlegroupManyvaluesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/singlegroup-manyvalues', singlegroupManyvaluesRouter);
};
