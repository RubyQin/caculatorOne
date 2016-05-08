'use strict';

/**
 * @ngdoc function
 * @name calculatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calculatorApp
 */
angular.module('calculatorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.evalString = '';
    $scope.result = '';
    $scope.updateOutput = function(value){
        $scope.evalString+=value;
    };
    
    $scope.eval = function(){
        console.log($scope.evalString);
        $scope.result = Parser.parse($scope.evalString).evaluate();
    };
    
    $scope.backspace = function(){
        $scope.evalString = $scope.evalString.substring(0, $scope.evalString.length-1);
    };
    
    
    $scope.clear = function(){
        $scope.evalString = '';
        $scope.result = '';
    };
  });
