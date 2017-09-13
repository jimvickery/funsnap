"use strict";

console.log('inside of control-add.js');


app.controller("addPostCtrl", function($scope, postsFactory, $location, userFactory){

	$scope.title = "New Post";
	$scope.submitButtonText = "Add Post";


	let user = userFactory.getCurrentUser();

	$scope.post = {
		createdBy: "Jim",
		createdDate: $scope.value = new Date().toString().split("T")[0],
		imageURL: "",
		imageURL2: "",
		post: "",
		keywords: "",
		uid: user
	};

    $scope.submitPost = function(){
    	
    	postsFactory.addPost($scope.post)
    	.then((data) => {
    		$location.url("/post-list");
    	});
    };



});