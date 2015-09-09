module.exports = function(app) {
  var express = require('express');
  var multigroupThreerangesRouter = express.Router();

  multigroupThreerangesRouter.get('/', function(req, res) {
    res.send({
      'multigroup/threerange': [
  {
    id: 1, label: "Label 1",
    group: "Group One",
    value: 20
  }, {
    id: 2, label: "Label 1",
    group: "Group Two",
    value: 32
  }, {
    id: 3, label: "Label 1",
    group: "Group Three",
    value: 4
  }, {
    id: 4, label: "Label 2",
    group: "Group One",
    value: 16
  }, {
    id: 5, label: "Label 2",
    group: "Group Two",
    value: 17
  }, {
    id: 6, label: "Label 2",
    group: "Group Three",
    value: -18
  }, {
    id: 7, label: "Label 3",
    group: "Group One",
    value: -18
  }, {
    id: 8, label: "Label 3",
    group: "Group Two",
    value: 18
  }, {
    id: 9, label: "Label 3",
    group: "Group Three",
    value: -19
  }

      ]
    });
  });

  multigroupThreerangesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  multigroupThreerangesRouter.get('/:id', function(req, res) {
    res.send({
      'multigroup/threeranges': {
        id: req.params.id
      }
    });
  });

  multigroupThreerangesRouter.put('/:id', function(req, res) {
    res.send({
      'multigroup/threeranges': {
        id: req.params.id
      }
    });
  });

  multigroupThreerangesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/multigroup/threerange', multigroupThreerangesRouter);
};
