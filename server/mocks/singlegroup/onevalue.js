module.exports = function(app) {
  var express = require('express');
  var singlegroupOnevalueRouter = express.Router();

  singlegroupOnevalueRouter.get('/', function(req, res) {
    res.send({
      'singlegroup/onevalue': [
        {
          id:1,
          label: "Label 1",
          value: 20
        }
      ]
    });
  });

  singlegroupOnevalueRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  singlegroupOnevalueRouter.get('/:id', function(req, res) {
    res.send({
      'singlegroup/onevalue': {
        id: req.params.id
      }
    });
  });

  singlegroupOnevalueRouter.put('/:id', function(req, res) {
    res.send({
      'singlegroup/onevalue': {
        id: req.params.id
      }
    });
  });

  singlegroupOnevalueRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/singlegroup/onevalue', singlegroupOnevalueRouter);
};
