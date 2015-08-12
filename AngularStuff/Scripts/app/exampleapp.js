'use strict';
var exampleApp = angular.module('example', []);                
exampleApp.service('viewService', ['templateService', viewService]);
exampleApp.service('templateService',['$http', '$compile', '$templateCache', templateService]);


exampleApp.controller('timelineController', ['$scope', 'viewService', timelineController]);   