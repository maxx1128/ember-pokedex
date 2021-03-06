'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Habitats',

  model: function() {
    return [{
      "id": 1,
      "name": "cave"
    }, {
      "id": 2,
      "name": "forest"
    }, {
      "id": 3,
      "name": "grassland"
    }, {
      "id": 4,
      "name": "mountain"
    }, {
      "id": 5,
      "name": "rare"
    }, {
      "id": 6,
      "name": "rough-terrain"
    }, {
      "id": 7,
      "name": "sea"
    }, {
      "id": 8,
      "name": "urban"
    }, {
      "id": 9,
      "name": "waters-edge"
    }];
  }
});
