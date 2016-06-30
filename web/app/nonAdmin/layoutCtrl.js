'use strict';
angular
.module('nonAdmin')
.controller('Layout', ['$scope', function ($scope) {
  var vm = this;
  var activeTabNber = 1;
  vm.activeCorrectTab = function (index) {
    activeTabNber = index;
  };
  vm.isTabActive = function (index) {
    return index === activeTabNber;
  };
}]);
