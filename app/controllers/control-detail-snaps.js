"use strict";

/*
    
    handle data for detail view

 */

app.controller("detailPostCtrl", function($scope, $routeParams, postsFactory){

	console.log("itemId", $routeParams.itemId);

    const showPost = function(){
    	postsFactory.getSinglePost($routeParams.itemId)
    	.then((data) => {
    		$scope.post = data;
    		$scope.post.id = $routeParams.itemId;
    	});
    };

    showPost();
});