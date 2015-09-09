module.exports = function(app) {
  var express = require('express');
  var singlegroupSumtozeroRouter = express.Router();

  singlegroupSumtozeroRouter.get('/', function(req, res) {
    res.send({
      'singlegroup/sumtozero': [
        {
          id: 1, label: "Label 1",
          value: 0,
          type: "percent"
        }, {
          id: 2, label: "Label 2",
          value: 2,
          type: "percent"
        }, {
          id: 3, label: "Label 3",
          value: 3,
          type: "percent"
        }, {
          id: 4, label: "Label 4",
          value: -5,
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

  app.use('/api/singlegroup/sumtozero', singlegroupSumtozeroRouter);
};
