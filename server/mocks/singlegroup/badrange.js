module.exports = function(app) {
  var express = require('express');
  var singlegroupBadrangeRouter = express.Router();

  singlegroupBadrangeRouter.get('/', function(req, res) {
    res.send({
      'singlegroup/badrange': [
      {
        id: 0,
        label: "Label 1",
        value: 200
      },
      {
        id: 1,
        label: "Label 2",
        value: 220
      },
      {
        id: 2,
        label: "Label 3",
        value: 0.1
      },
      {
        id:3,
        label: "Label 4",
        value: 1
      },
      {
        id:4,
        label: "Label 5",
        value: 1
      },
      {
        id:5,
        label: "Label 6",
        value: -18
      },
      {
        id:6,
        label: "Label 7",
        value: -18
      },
      {
        id:7,
        label: "Label 8",
        value: 18
      }
      ]
    });
  });

  singlegroupBadrangeRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  singlegroupBadrangeRouter.get('/:id', function(req, res) {
    res.send({
      'singlegroup/badrange': {
        id: req.params.id
      }
    });
  });

  singlegroupBadrangeRouter.put('/:id', function(req, res) {
    res.send({
      'singlegroup/badrange': {
        id: req.params.id
      }
    });
  });

  singlegroupBadrangeRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/singlegroup/badrange', singlegroupBadrangeRouter);
};
