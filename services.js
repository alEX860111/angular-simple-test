(function() {
	var app = angular.module('services', []);
	
	app.service('Product', function() {
		this.get = function() {
			return {
				name: 'Cool product',
				price: 2.96,
				description: 'bla bla'
			};
		};
	});

})();