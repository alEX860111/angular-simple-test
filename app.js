(function() {
	var app = angular.module('store');
	
	app.controller('StoreController', ['$scope', 'Product', function($scope, Product) {
		$scope.product = Product.get();
	}]);

})();
