var myControl = angular.module('myControl', []);

myControl.controller('tablaControl', ['$scope', '$http', function($scope, $http){
    $http.get('data/data.json').success(function(data){
        $scope.personajes = data;
    });
}]);

myControl.controller('detallesControl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams){
    $http.get('data/data.json').success(function(data){
        $scope.personajes = data;
        $scope.whichItem = $routeParams.itemId;
    });
}]);