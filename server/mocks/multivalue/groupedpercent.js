module.exports = function(app) {
  var express = require('express');
  var multivalueGroupedpercentRouter = express.Router();

  multivalueGroupedpercentRouter.get('/', function(req, res) {
    res.send({
      'multivalue/groupedpercent': [
{
    id: 1, group: "Energy",
    xValue: 0.017,
    yValue: 0.03
  }, {
    id: 2, group: "Energy",
    xValue: 0.044,
    yValue: 0.048
  }, {
    id: 3, group: "Energy",
    xValue: 0.005,
    yValue: 0.01,
    id: 4, group: "Industrial Metals",
    xValue: -0.28,
    yValue: -0.08
  }, {
    id: 5, group: "Industrial Metals",
    xValue: -0.90,
    yValue: -0.08
  }, {
    id: 6, group: "Industrial Metals",
    xValue: -0.44,
    yValue: -0.16
  }, {
    id: 7, group: "Municipal Bonds",
    xValue: 0.14,
    yValue: 0.04
  }, {
    id: 8, group: "Municipal Bonds",
    xValue: 0.24,
    yValue: 0.83
  }, {
    id: 9, group: "Municipal Bonds",
    xValue: 0.39,
    yValue: 0.48
  }, {
    id: 10, group: "Precious Metals",
    xValue: -0.12,
    yValue: -0.22
  }, {
    id: 11, group: "Precious Metals",
    xValue: -0.09,
    yValue: -0.70
  }, {
    id: 12, group: "Precious Metals",
    xValue: -0.70,
    yValue: -0.88
  }, {
    id: 13, group: "Real Estate",
    xValue: -0.28,
    yValue: -0.91
  }, {
    id: 14, group: "Real Estate",
    xValue: -0.40,
    yValue: -0.71
  }, {
    id: 15, group: "Real Estate",
    xValue: -0.35,
    yValue: -0.17
  }, {
    id: 16, group: "Venture",
    xValue: -0.46,
    yValue: -0.30
  }, {
    id: 17, group: "Venture",
    xValue: -0.65,
    yValue: -0.92
  }, {
    id: 18, group: "Venture",
    xValue: -0.37,
    yValue: -0.30
  }
      ]
    });
  });

  multivalueGroupedpercentRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  multivalueGroupedpercentRouter.get('/:id', function(req, res) {
    res.send({
      'multivalue/groupedpercent': {
        id: req.params.id
      }
    });
  });

  multivalueGroupedpercentRouter.put('/:id', function(req, res) {
    res.send({
      'multivalue/groupedpercent': {
        id: req.params.id
      }
    });
  });

  multivalueGroupedpercentRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/multivalue/groupedpercent', multivalueGroupedpercentRouter);
};
