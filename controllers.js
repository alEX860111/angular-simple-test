(function() {
	var app = angular.module('controllers', []);
	
	app.controller('StoreController', ['$scope', 'Product', function($scope, Product) {
		$scope.product = Product.get();
	}]);

})();
