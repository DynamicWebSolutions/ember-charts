module.exports = function(app) {
  var express = require('express');
  var singlegroupAssetvaluesRouter = express.Router();

  singlegroupAssetvaluesRouter.get('/', function(req, res) {
    res.send({
      'singlegroup/assetvalue': [
        {
          id:0,
          label: "Cash & Cash Equivalent",
          value: 5403418.115000006,
          type: "money",
        },
        {
          id:1,
          label: "Fixed Income",
          value: 8231078.16438347,
          type: "money",
        },
        {
          id:2,
          label: "Equity",
          value: 12935781.176999997,
          type: "money",
        },
        {
          id:3,          
          label: "Hedge Fund",
          value: 1621341.246006786,
          type: "money",
        },
        {
          id:4,          
          label: "Private Equity",
          value: 1574677.59,
          type: "money",
        },
        {
          id:5,          
          label: "Real Assets",
          value: 10475849.276172025,
          type: "money",
        }
      ]
    });
  });

  singlegroupAssetvaluesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  singlegroupAssetvaluesRouter.get('/:id', function(req, res) {
    res.send({
      'singlegroup/assetvalues': {
        id: req.params.id
      }
    });
  });

  singlegroupAssetvaluesRouter.put('/:id', function(req, res) {
    res.send({
      'singlegroup/assetvalues': {
        id: req.params.id
      }
    });
  });

  singlegroupAssetvaluesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/singlegroup/assetvalue', singlegroupAssetvaluesRouter);
};
