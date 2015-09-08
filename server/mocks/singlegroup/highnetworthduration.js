module.exports = function(app) {
  var express = require('express');
  var singlegroupHighnetworthdurationRouter = express.Router();

  singlegroupHighnetworthdurationRouter.get('/', function(req, res) {
    res.send({
      'singlegroup/highnetworthduration': []
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

  app.use('/api/singlegroup-highnetworthduration', singlegroupHighnetworthdurationRouter);
};
