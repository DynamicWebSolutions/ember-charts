module.exports = function(app) {
  var express = require('express');
  var singlegroupTwovaluesRouter = express.Router();

  singlegroupTwovaluesRouter.get('/', function(req, res) {
    res.send({
      'singlegroup/twovalues': []
    });
  });

  singlegroupTwovaluesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  singlegroupTwovaluesRouter.get('/:id', function(req, res) {
    res.send({
      'singlegroup/twovalues': {
        id: req.params.id
      }
    });
  });

  singlegroupTwovaluesRouter.put('/:id', function(req, res) {
    res.send({
      'singlegroup/twovalues': {
        id: req.params.id
      }
    });
  });

  singlegroupTwovaluesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/singlegroup-twovalues', singlegroupTwovaluesRouter);
};
