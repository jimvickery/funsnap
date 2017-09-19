"use strict";


app.controller("detailPostCtrl", function($scope, $routeParams, postsFactory, $location){

	console.log("$routeParams itemId", $routeParams.itemId);
		

	// shows the post
    const showPost = function(){
    	postsFactory.getSinglePost($routeParams.itemId)
    	.then((data) => {
			$scope.post = data;			
			$scope.post.id = $routeParams.itemId;
			
    	});
	};
	showPost();


	// deletes the post
	$scope.deletePost = function(id){
    	postsFactory.deletePost(id)
    	.then(() => {
			$location.path("/post-list");	
    	});
	};


	// $scope.nextPage = function () {
	// 	$scope._Index = ($scope._Index < $scope.nbItems - 1) ? ++$scope._Index : 0;
	// 	$scope.functionToCallWithNextItem($scope.nextPage.param1);
	// };
	
	

	




});