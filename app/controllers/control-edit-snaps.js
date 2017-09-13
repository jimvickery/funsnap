"use strict";

console.log('inside of control-edit.js');


app.controller("editPostCtrl", function($scope, postsFactory, $routeParams, $location){

	$scope.title = "Edit Post";
	$scope.submitButtonText = "Edit Post";

	$scope.post = {
		createdBy: "",
		createdDate: "",
		imageURL: "",
		imageURL2: "",
		imageURL3: "",
		post: "",
		keywords: ""
	};

    const showEditPost = function(){
    	postsFactory.getSinglePost($routeParams.itemId)
    	.then((data) => {
    		console.log("data", data);
    		$scope.post = data;
    		$scope.post.id = $routeParams.itemId;
    	});
    };

    $scope.submitPost = function(){
    	postsFactory.editPost($routeParams.itemId, $scope.post)
    	.then((data) => {
    		$location.path("#!/item-list");
    	});
    };


    showEditPost();
});