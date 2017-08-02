import BaseLayer from 'ember-leaflet/components/base-layer';

export default BaseLayer.extend({

  leafletOptions: [
    'accessToken',
    'style'
  ],

  createLayer() {
    return new this.L.MapboxGL(...this.get('requiredOptions'), this.get('options'));
  }
});
