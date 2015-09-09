module.exports = function(app) {
  var express = require('express');
  var multigroupSectorcomparereturnRouter = express.Router();

  multigroupSectorcomparereturnRouter.get('/', function(req, res) {
    res.send({
      'multigroup/sectorcomparereturn': [
       {
          id: 1 ,
          group: "Merrill Lynch",
          label: "Mechanical engineering & industrial equip.",
          value: 4647.603703145614,
          type: "money"
        }, {
          id: 2 ,
          group: "Merrill Lynch",
          label: "Miscellaneous consumer goods",
          value: 3189.180308185896,
          type: "money"
        }, {
          id: 3 ,
          group: "Merrill Lynch",
          label: "Petroleum",
          value: 3937.970281974645,
          type: "money"
        }, {
          id: 4 ,
          group: "Merrill Lynch",
          label: "Pharmaceuticals cosmetics & med. products",
          value: 10874.807224610915,
          type: "money"
        }, {
          id: 5 ,group: "Merrill Lynch",
          label: "Retail",
          value: 27447.831733878324,
          type: "money"
        }, {
          id: 6 ,group: "Merrill Lynch",
          label: "Retail trade & department stores",
          value: 31035.627782905445,
          type: "money"
        }, {
          id: 7 ,group: "Merrill Lynch",
          label: "Short Term",
          value: 8707.749774914644,
          type: "money"
        }, {
          id: 8 ,group: "Merrill Lynch",
          label: "Software & Programming",
          value: 117326.4348387686,
          type: "money"
        }, {
          id: 9 ,group: "Merrill Lynch",
          label: "Telecommunication",
          value: 9515.74704319803,
          type: "money"
        }, {
          id: 10 ,group: "Merrill Lynch",
          label: "Financial analytics software",
          value: 99310.60662117682,
          type: "money"
        }, {
          id: 11 ,group: "Barclays",
          label: "Mechanical engineering & industrial equip.",
          value: 6476.03703145614,
          type: "money"
        }, {
          id: 12 ,group: "Barclays",
          label: "Miscellaneous consumer goods",
          value: 1891.80308185896,
          type: "money"
        }, {
          id: 13 ,group: "Barclays",
          label: "Petroleum",
          value: 39379.70281974645,
          type: "money"
        }, {
          id: 14 ,group: "Barclays",
          label: "Pharmaceuticals cosmetics & med. products",
          value: 8748.07224610915,
          type: "money"
        }, {
          id: 15 ,group: "Barclays",
          label: "Retail",
          value: 74478.31733878324,
          type: "money"
        }, {
          id: 16 ,group: "Barclays",
          label: "Retail trade & department stores",
          value: 10356.27782905445,
          type: "money"
        }, {
          id: 17 ,group: "Barclays",
          label: "Short Term",
          value: 7077.49774914644,
          type: "money"
        }, {
          id: 18 ,group: "Barclays",
          label: "Software & Programming",
          value: 173264.348387686,
          type: "money"
        }, {
          id: 19 ,group: "Barclays",
          label: "Telecommunication",
          value: 5157.4704319803,
          type: "money"
        }, {
          id: 20 ,group: "Barclays",
          label: "Financial analytics software",
          value: 93106.0662117682,
          type: "money"
        }, {
          id: 21 ,group: "BlackRock",
          label: "Mechanical engineering & industrial equip.",
          value: 4760.3703145614,
          type: "money"
        }, {
          id: 22 ,group: "BlackRock",
          label: "Miscellaneous consumer goods",
          value: 8918.0308185896,
          type: "money"
        }, {
          id: 23 ,group: "BlackRock",
          label: "Petroleum",
          value: 93797.0281974645,
          type: "money"
        }, {
          id: 24 ,group: "BlackRock",
          label: "Pharmaceuticals cosmetics & med. products",
          value: 87480.7224610915,
          type: "money"
        }, {
          id: 25 ,group: "BlackRock",
          label: "Retail",
          value: 44783.1733878324,
          type: "money"
        }, {
          id: 26 ,group: "BlackRock",
          label: "Retail trade & department stores",
          value: 3562.7782905445,
          type: "money"
        }, {
          id: 27 ,group: "BlackRock",
          label: "Short Term",
          value: 774.9774914644,
          type: "money"
        }, {
          id: 28 ,group: "BlackRock",
          label: "Software & Programming",
          value: 73264.48387686,
          type: "money"
        }, {
          id: 29 ,group: "BlackRock",
          label: "Telecommunication",
          value: 1574.704319803,
          type: "money"
        }, {
          id: 30 ,group: "BlackRock",
          label: "Financial analytics software",
          value: 31060.662117682,
          type: "money"
        }, {
          id: 31 ,group: "Vanguard",
          label: "Mechanical engineering & industrial equip.",
          value: 7603.703145614,
          type: "money"
        }, {
          id: 32 ,group: "Vanguard",
          label: "Miscellaneous consumer goods",
          value: 9180.308185896,
          type: "money"
        }, {
          id: 33 ,group: "Vanguard",
          label: "Petroleum",
          value: 37970.281974645,
          type: "money"
        }, {
          id: 34 ,group: "Vanguard",
          label: "Pharmaceuticals cosmetics & med. products",
          value: 74807.224610915,
          type: "money"
        }, {
          id: 35 ,group: "Vanguard",
          label: "Retail",
          value: 47831.733878324,
          type: "money"
        }, {
          id: 36 ,group: "Vanguard",
          label: "Retail trade & department stores",
          value: 35627.782905445,
          type: "money"
        }, {
          id: 37 ,group: "Vanguard",
          label: "Short Term",
          value: 7749.774914644,
          type: "money"
        }, {
          id: 38 ,group: "Vanguard",
          label: "Software & Programming",
          value: 326434.8387686,
          type: "money"
        }, {
          id: 39 ,group: "Vanguard",
          label: "Telecommunication",
          value: 5747.04319803,
          type: "money"
        }, {
          id: 40 ,group: "Vanguard",
          label: "Financial analytics software",
          value: 10606.62117682,
          type: "money"
        }, {
          id: 41 ,group: "Benchmark",
          label: "Mechanical engineering & industrial equip.",
          value: 6037.03145614,
          type: "money"
        }, {
          id: 42 ,group: "Benchmark",
          label: "Miscellaneous consumer goods",
          value: 1803.08185896,
          type: "money"
        }, {
          id: 43 ,group: "Benchmark",
          label: "Petroleum",
          value: 79702.81974645,
          type: "money"
        }, {
          id: 44 ,group: "Benchmark",
          label: "Pharmaceuticals cosmetics & med. products",
          value: 48072.24610915,
          type: "money"
        }, {
          id: 45 ,group: "Benchmark",
          label: "Retail",
          value: 78317.33878324,
          type: "money"
        }, {
          id: 46 ,group: "Benchmark",
          label: "Retail trade & department stores",
          value: 56277.82905445,
          type: "money"
        }, {
          id: 47 ,group: "Benchmark",
          label: "Short Term",
          value: 7497.74914644,
          type: "money"
        }, {
          id: 48 ,group: "Benchmark",
          label: "Software & Programming",
          value: 264348.387686,
          type: "money"
        }, {
          id: 49 ,group: "Benchmark",
          label: "Telecommunication",
          value: 7470.4319803,
          type: "money"
        }, {
          id: 50 ,group: "Benchmark",
          label: "Financial analytics software",
          value: 6066.2117682,
          type: "money"
        }
      ]
    });
  });

  multigroupSectorcomparereturnRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  multigroupSectorcomparereturnRouter.get('/:id', function(req, res) {
    res.send({
      'multigroup/sectorcomparereturn': {
        id: req.params.id
      }
    });
  });

  multigroupSectorcomparereturnRouter.put('/:id', function(req, res) {
    res.send({
      'multigroup/sectorcomparereturn': {
        id: req.params.id
      }
    });
  });

  multigroupSectorcomparereturnRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/multigroup/sectorcomparereturn', multigroupSectorcomparereturnRouter);
};
