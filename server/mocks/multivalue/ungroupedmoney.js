module.exports = function(app) {
  var express = require('express');
  var multivalueUngroupedmoneyRouter = express.Router();

  multivalueUngroupedmoneyRouter.get('/', function(req, res) {
    res.send({
      'multivalue/ungroupedmoney': [
  {
    id: 1, xValue: 0.0915981001931350,
    yValue: 0.0804410390131541
  }, {
    id: 2, xValue: -0.012867651474625,
    yValue: 0.0512250395861894
  }, {
    id: 3, xValue: 0.1146312318222022,
    yValue: 0.2163129187250687
  }, {
    id: 4, xValue: 0.6374091269925063,
    yValue: 0.10074171943564902
  }, {
    id: 5, xValue: -0.2947777704540345,
    yValue: 0.24950077509252144
  }, {
    id: 6, xValue: 0.02987519458727168,
    yValue: 0.029635401795167875
  }, {
    id: 7, xValue: -0.09569219640756767,
    yValue: 0.009220157989642461
  }, {
    id: 8, xValue: 0.10008114769529128,
    yValue: 0.05765241751521731
  }, {
    id: 9, xValue: -0.37607356395333114,
    yValue: 0.034742737850069066
  }, {
    id: 10, xValue: 3.3197211825930815,
    yValue: 0.13789386518401808
  }, {
    id: 11, xValue: 0.019197687785704524,
    yValue: 0.29156199641011393
  }, {
    id: 12, xValue: 0.026160853602207837,
    yValue: 0.04422240117969545
  }, {
    id: 13, xValue: -0.4336241324616037,
    yValue: -0.1212570493221228
  }, {
    id: 14, xValue: 0.21108601344106037,
    yValue: 0.060125232218492954
  }, {
    id: 15, xValue: -0.40681455559410074,
    yValue: -0.1684063268162467
  }, {
    id: 16, xValue: -0.25926052510725767,
    yValue: -0.07375676387763123
  }, {
    id: 17, xValue: -0.09699806589049279,
    yValue: -0.049638457268871825
  }
      ]
    });
  });

  multivalueUngroupedmoneyRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  multivalueUngroupedmoneyRouter.get('/:id', function(req, res) {
    res.send({
      'multivalue/ungroupedmoney': {
        id: req.params.id
      }
    });
  });

  multivalueUngroupedmoneyRouter.put('/:id', function(req, res) {
    res.send({
      'multivalue/ungroupedmoney': {
        id: req.params.id
      }
    });
  });

  multivalueUngroupedmoneyRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/multivalue/ungroupedmoney', multivalueUngroupedmoneyRouter);
};
