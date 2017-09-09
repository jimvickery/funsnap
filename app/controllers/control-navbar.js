"use strict";
console.log('inside of control-navbar.js');


app.controller("navCtrl", function($scope, $window, userFactory, filterFactory){

  $scope.searchText = filterFactory;
	$scope.isLoggedIn = false;

	$scope.logout = () => {
    	userFactory.logOut();
  	};

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $scope.isLoggedIn = true;
      $scope.$apply();
    } else {
      $scope.isLoggedIn = false;
      $window.location.href = "#!/login";
    }
  });
	
});