module.exports = function(app) {
  var express = require('express');
  var singlegroupSinglesectorreturnRouter = express.Router();

  singlegroupSinglesectorreturnRouter.get('/', function(req, res) {
    res.send({
      'singlegroup/singlesectorreturn': []
    });
  });

  singlegroupSinglesectorreturnRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  singlegroupSinglesectorreturnRouter.get('/:id', function(req, res) {
    res.send({
      'singlegroup/singlesectorreturn': {
        id: req.params.id
      }
    });
  });

  singlegroupSinglesectorreturnRouter.put('/:id', function(req, res) {
    res.send({
      'singlegroup/singlesectorreturn': {
        id: req.params.id
      }
    });
  });

  singlegroupSinglesectorreturnRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/singlegroup/singlesectorreturn', singlegroupSinglesectorreturnRouter);
};
