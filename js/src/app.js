var myApp = angular.module('myApp', ['ngRoute', 'myControl']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'pages/ppal.html'
	})
	
	.when('/datos', {
		templateUrl: 'pages/datos.html'
    })
    
    .when('/detalles/:itemId', {
        templateUrl: 'pages/detalles.html',
        controller: 'detallesControl'
    })
    
    .otherwise({
      redirectTo: '/'
  });
});

myApp.directive('cabecera', function(){
    return {
        templateUrl: 'pages/cabecera.html'
    };
});

myApp.directive('pie', function(){
    return {
        templateUrl: 'pages/pie.html'
    };
});

