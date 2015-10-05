angular.module('routerApp', ['routerRoutes','ngAnimate'])

.controller('mainController',function(){
	var vm = this;
	vm.bigMessage = 'A smooth sea never made skilled sailors';
})
.controller('homeController',function(){
	var vm = this;
	vm.message = 'This is Home page';
	// $http.get('http://localhost:8000/api/user')
	// .then(function(data){
	// 	vm.user = data.users;
	// });
})
.controller('aboutController',function(){
	var vm = this;
	vm.message = 'This is About page';
})
.controller('contactController',function(){
	var vm = this;
	vm.message = 'This is Contact page';
})
