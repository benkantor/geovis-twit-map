'use strict';

/**
 * @ngdoc function
 * @name geovisTwitMapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geovisTwitMapApp
 */
angular.module('geovisTwitMapApp')
  .controller('MainCtrl', function () {
    var vm = this;

    vm.mapObject = {
      scope: 'world',
      options: {
        width: 1110,
        legendHeight: 60 // optionally set the padding for the legend
      },
      geographyConfig: {
        highlighBorderColor: '#EAA9A8',
        highlighBorderWidth: 2
      },
      fills: {
        'HIGH': '#CC4731',
        'MEDIUM': '#306596',
        'LOW': '#667FAF',
        'defaultFill': '#DDDDDD'
      },
      data: {
        'AZ': {
          'fillKey': 'MEDIUM',
        },
        'CO': {
          'fillKey': 'HIGH',
        },
        'DE': {
          'fillKey': 'LOW',
        },
        'GA': {
          'fillKey': 'MEDIUM',
        }
      },
    };
  });
