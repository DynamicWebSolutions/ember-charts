module.exports = function(app) {
  var express = require('express');
  var singlegroupZeroesRouter = express.Router();

  singlegroupZeroesRouter.get('/', function(req, res) {
    res.send({
      'singlegroup/manyzero': [
        {
          id: 1, label: "Label 1",
          value: 0,
          type: "percent"
        }, {
          id: 2, label: "Label 2",
          value: 0,
          type: "percent"
        }, {
          id: 3, label: "Label 3",
          value: 0,
          type: "percent"
        }, {
          id: 4, label: "Label 4",
          value: 0,
          type: "percent"
        }, {
          id: 5, label: "Label 5",
          value: 0,
          type: "percent"
        }, {
          id: 6, label: "Label 6",
          value: 0,
          type: "percent"
        }
      ]
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

  app.use('/api/singlegroup/manyzero', singlegroupZeroesRouter);
};
