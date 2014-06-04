(function() {
	var app = angular.module('store', []);
	
	app.controller('StoreController', ['$scope', function($scope) {
		$scope.product = gem;
	}]);
	
	var gem = {
		name: 'Cool product',
		price: 2.95,
		description: 'bla bla'
	}
})();
