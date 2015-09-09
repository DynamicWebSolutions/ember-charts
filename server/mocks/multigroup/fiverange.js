module.exports = function(app) {
  var express = require('express');
  var multigroupFiverangesRouter = express.Router();

  multigroupFiverangesRouter.get('/', function(req, res) {
    res.send({
      'multigroup/fiverange': [
         {
            id: 0,
            label: "Label 1",
            group: "Group One",
            value: 20
          }, {
            id: 1,            
            label: "Label 2",
            group: "Group One",
            value: 22
          }, {
            id: 2,
            label: "Label 3",
            group: "Group One",
            value: 18
          }, {
            id: 3,
            label: "Label 4",
            group: "Group One",
            value: 2
          }, {
            id: 4,
            label: "Label 5",
            group: "Group One",
            value: 6
          }, {
            id:5,
            label: "Label 1",
            group: "Group Two",
            value: 26
          }, {
            id:6,
            label: "Label 2",
            group: "Group Two",
            value: 18
          }, {
            id:7,
            label: "Label 3",
            group: "Group Two",
            value: 150
          }, {
            id:8,
            label: "Label 4",
            group: "Group Two",
            value: 160
          }, {
            id:9,
            label: "Label 5",
            group: "Group Two",
            value: 200
          }, {
            id:10,
            label: "Label 1",
            group: "Group Three",
            value: 14
          }, {
            id:11,
            label: "Label 2",
            group: "Group Three",
            value: 31
          }, {
            id:12,
            label: "Label 3",
            group: "Group Three",
            value: 44
          }, {
            id:13,
            label: "Label 4",
            group: "Group Three",
            value: 30
          }, {
            id:14,
            label: "Label 5",
            group: "Group Three",
            value: 62
          }, {
            id:15,
            label: "Label 1",
            group: "Group Four",
            value: 75
          }, {
            id:16,
            label: "Label 2",
            group: "Group Four",
            value: 114
          }, {
            id:17,
            label: "Label 3",
            group: "Group Four",
            value: 19
          }, {
            id:18,
            label: "Label 4",
            group: "Group Four",
            value: 129
          }, {
            id:19,
            label: "Label 5",
            group: "Group Four",
            value: 52
          }, {
            id:20,
            label: "Label 1",
            group: "Group Five",
            value: 200
          }, {
            id:21,
            label: "Label 2",
            group: "Group Five",
            value: 14
          }, {
            id:22,
            label: "Label 3",
            group: "Group Five",
            value: 31
          }, {
            id:23,
            label: "Label 4",
            group: "Group Five",
            value: 44
          }, {
            id:24,
            label: "Label 5",
            group: "Group Five",
            value: 30
          }
      ]
    });
  });

  multigroupFiverangesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  multigroupFiverangesRouter.get('/:id', function(req, res) {
    res.send({
      'multigroup/fiveranges': {
        id: req.params.id
      }
    });
  });

  multigroupFiverangesRouter.put('/:id', function(req, res) {
    res.send({
      'multigroup/fiveranges': {
        id: req.params.id
      }
    });
  });

  multigroupFiverangesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/multigroup/fiverange', multigroupFiverangesRouter);
};
