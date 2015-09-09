module.exports = function(app) {
  var express = require('express');
  var multivalueGroupedmoneyRouter = express.Router();

  multivalueGroupedmoneyRouter.get('/', function(req, res) {
    res.send({
      'multivalue/groupedmoney': [
{
    id: 1, group: "Cash",
    xValue: 0.0915981001931350,
    yValue: 0.0804410390131541
  }, {
    id: 2, group: "Investment Grade",
    xValue: -0.012867651474625,
    yValue: 0.0512250395861894
  }, {
    id: 3, group: "High Yield",
    xValue: 0.1146312318222022,
    yValue: 0.2163129187250687
  }, {
    id: 4, group: "Value",
    xValue: 0.6374091269925063,
    yValue: 0.10074171943564902
  }, {
    id: 5, group: "Growth",
    xValue: -0.2947777704540345,
    yValue: 0.24950077509252144
  }, {
    id: 6, group: "Directional",
    xValue: 0.02987519458727168,
    yValue: 0.029635401795167875
  }, {
    id: 7, group: "Relative Value",
    xValue: -0.09569219640756767,
    yValue: 0.009220157989642461
  }, {
    id: 8, group: "Tactical",
    xValue: 0.10008114769529128,
    yValue: 0.05765241751521731
  }, {
    id: 9, group: "Agriculture",
    xValue: -0.37607356395333114,
    yValue: 0.034742737850069066
  }, {
    id: 10, group: "Art",
    xValue: 3.3197211825930815,
    yValue: 0.13789386518401808
  }, {
    id: 11, group: "Buyout",
    xValue: 0.019197687785704524,
    yValue: 0.29156199641011393
  }, {
    id: 12, group: "Energy",
    xValue: 0.026160853602207837,
    yValue: 0.04422240117969545
  }, {
    id: 13, group: "Industrial Metals",
    xValue: -0.4336241324616037,
    yValue: -0.1212570493221228
  }, {
    id: 14, group: "Municipal Bonds",
    xValue: 0.21108601344106037,
    yValue: 0.060125232218492954
  }, {
    id: 15, group: "Precious Metals",
    xValue: -0.40681455559410074,
    yValue: -0.1684063268162467
  }, {
    id: 16, group: "Real Estate",
    xValue: -0.25926052510725767,
    yValue: -0.07375676387763123
  }, {
    id: 17, group: "Venture",
    xValue: -0.09699806589049279,
    yValue: -0.049638457268871825
  }
      ]
    });
  });

  multivalueGroupedmoneyRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  multivalueGroupedmoneyRouter.get('/:id', function(req, res) {
    res.send({
      'multivalue/groupedmoney': {
        id: req.params.id
      }
    });
  });

  multivalueGroupedmoneyRouter.put('/:id', function(req, res) {
    res.send({
      'multivalue/groupedmoney': {
        id: req.params.id
      }
    });
  });

  multivalueGroupedmoneyRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/multivalue/groupedmoney', multivalueGroupedmoneyRouter);
};
