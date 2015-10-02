angular.module('firstApp',[])
.controller('mainController',function(){
	var vm = this;
	vm.message = 'Welcome!';
	vm.gadgets = [
		{name:"Macbook Pro",color:"Silver",price:1688},
		{name:"Ipad Mini",color:"Silver",price:418}
	];

	vm.gadgetData = {};
	vm.addGadget = function() {
		// add a computer to the list
			vm.gadgets.push({
				name: vm.gadgetData.name,
				color: vm.gadgetData.color,
				price: vm.gadgetData.pirce
			});
			// after our computer has been added, clear the form
			vm.gadgetData = {};
		};
})