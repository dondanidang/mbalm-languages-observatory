'use strict';
/*All the modules are bootstraped here*/
angular
  .element(document)
  .ready(function() {
    angular.bootstrap(document, ['OLCM']);
  });

angular.module('OLCM',['nonAdmin']);
