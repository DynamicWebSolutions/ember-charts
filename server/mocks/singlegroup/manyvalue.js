module.exports = function(app) {
  var express = require('express');
  var singlegroupManyvaluesRouter = express.Router();

  singlegroupManyvaluesRouter.get('/', function(req, res) {
    res.send({
      'singlegroup/manyvalue': [
        {
          id: 1, label: "Label 1",
          value: 20
        }, {
          id: 2, label: "Label 2",
          value: 22
        }, {
          id: 3, label: "Label 3",
          value: 18
        }, {
          id: 4, label: "Label 4",
          value: 2
        }, {
          id: 5, label: "Label 5",
          value: 6
        }, {
          id: 6, label: "Label 6",
          value: 26
        }, {
          id: 7, label: "Label 7",
          value: 18
        }, {
          id: 8, label: "Label 8",
          value: 150
        }, {
          id: 9, label: "Label 9",
          value: 160
        }, {
          id: 10, label: "Label 10",
          value: 200
        }, {
          id: 11, label: "Label 11",
          value: 14
        }, {
          id: 12, label: "Label 12",
          value: 31
        }, {
          id: 13, label: "Label 13",
          value: 44
        }, {
          id: 14, label: "Label 14",
          value: 30
        }, {
          id: 15, label: "Label 15",
          value: 62
        }, {
          id: 16, label: "Label 16",
          value: 75
        }, {
          id: 17, label: "Label 17",
          value: 114
        }, {
          id: 18, label: "Label 18",
          value: 19
        }, {
          id: 19, label: "Label 19",
          value: 129
        }, {
          id: 20, label: "Label 20",
          value: 52
        }, {
          id: 21, label: "Label 21",
          value: 200
        }, {
          id: 22, label: "Label 22",
          value: 14
        }, {
          id: 23, label: "Label 23",
          value: 31
        }, {
          id: 24, label: "Label 24",
          value: 44
        }, {
          id: 25, label: "Label 25",
          value: 30
        }, {
          id: 26, label: "Label 26",
          value: 62
        }
      ]
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

  app.use('/api/singlegroup/manyvalue', singlegroupManyvaluesRouter);
};
