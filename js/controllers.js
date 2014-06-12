'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MapCtrl', ['$scope', function($scope) {
    $scope.rooms = [
      {'name': '*69', 'class': 'star69', 'dir': 'bottom'},
      {'name': 'ABC', 'class': 'abc', 'dir': 'top'},
      {'name': 'Ballpoint', 'class': 'ballpoint', 'dir': 'bottom'},
      {'name': 'Call Waiting', 'class': 'call-waiting', 'dir': 'top'},
      {'name': 'Dial Tone', 'class': 'dial-tone', 'dir': 'top'},
      {'name': 'Hieroglyph', 'class': 'hieroglyph', 'dir': 'left'},
      {'name': 'Hypertext', 'class': 'hypertext', 'dir': 'top'},
      {'name': 'Morse Code', 'class': 'morse-code', 'dir': 'bottom'},
      {'name': 'Phone Home', 'class': 'phone-home', 'dir': 'bottom'},
      {'name': 'Pony Express', 'class': 'pony-express', 'dir': 'bottom'},
      {'name': 'Rosetta Stone', 'class': 'rosetta-stone', 'dir': 'left'},
      {'name': 'Smoke Signal', 'class': 'smoke-signal', 'dir': 'top'},
      {'name': 'Sputnik', 'class': 'sputnik', 'dir': 'top'},
      {'name': 'Telegram', 'class': 'telegram', 'dir': 'right'},
      {'name': 'Wall Street', 'class': 'wall-street', 'dir': 'bottom'},
     ];
  }]);