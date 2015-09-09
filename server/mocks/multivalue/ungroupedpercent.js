module.exports = function(app) {
  var express = require('express');
  var multivalueUngroupedpercentRouter = express.Router();

  multivalueUngroupedpercentRouter.get('/', function(req, res) {
    res.send({
      'multivalue/ungroupedpercent': [
        {
          id: 1, xValue: 0.017440569068138557,
          yValue: 0.029481600786463634
        }, {
          id: 2, xValue: -0.28908275497440244,
          yValue: -0.08083803288141521
        }, {
          id: 3, xValue: 0.14072400896070691,
          yValue: 0.04008348814566197
        }, {
          id: 4, xValue: -0.2712097037294005,
          yValue: -0.11227088454416446
        }, {
          id: 5, xValue: -0.1728403500715051,
          yValue: -0.04917117591842082
        }, {
          id: 6, xValue: -0.06466537726032852,
          yValue: -0.03309230484591455
        }
      ]
    });
  });

  multivalueUngroupedpercentRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  multivalueUngroupedpercentRouter.get('/:id', function(req, res) {
    res.send({
      'multivalue/ungroupedpercent': {
        id: req.params.id
      }
    });
  });

  multivalueUngroupedpercentRouter.put('/:id', function(req, res) {
    res.send({
      'multivalue/ungroupedpercent': {
        id: req.params.id
      }
    });
  });

  multivalueUngroupedpercentRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/multivalue/ungroupedpercent', multivalueUngroupedpercentRouter);
};
