var api = require('../'),
    assert = require('assert');

describe('mapshaper-polygons.js', function () {

  it ('test 1: tic-tac-toe board', function(done) {
    var input = {
      type: 'MultiLineString',
      coordinates: [
        [[1, 0], [1, 3]],
        [[2, 0], [2, 3]],
        [[3, 1], [0, 1]],
        [[0, 2], [3, 2]]
      ]
    };
    var target = {
      type: 'Polygon',
      coordinates: [ [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ], [ 1, 1 ] ] ]
    }
    api.applyCommands('in.json -polygons -o out.json', {'in.json': input}, function(err, out) {
      var poly = JSON.parse(out['out.json']).geometries[0];
      assert.deepEqual(poly, target);
      done();
    })

  });
});