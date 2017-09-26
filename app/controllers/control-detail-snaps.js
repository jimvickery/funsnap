"use strict";


app.controller("detailPostCtrl", function($scope, $routeParams, postsFactory, $location, $anchorScroll){

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


//scroll to next viral image function --It works
$scope.go = function ($scrollLocation ) {
	$location.hash($scrollLocation);
};

// $scope.go = function(targetId){
// 	var destination = $(targetId).offset().top;
// 	$('html, body').animate({scrollTop: destination}, 300);
// };	

	




});