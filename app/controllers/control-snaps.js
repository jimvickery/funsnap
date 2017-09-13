"use strict";

console.log('inside of control-posts.js');


app.controller("postCtrl", function($scope, postsFactory, userFactory, filterFactory, $rootScope){

	$scope.postsArray = [];
	let user = userFactory.getCurrentUser();
	$rootScope.showSearch = true; 
	$scope.searchText = filterFactory;


	const showAllPosts = function(){
		postsFactory.getAllPosts(user)
    	.then((postsArray) => {
    		console.log("showAllPosts from promise", postsArray);
    		$scope.postsArray =  postsArray;
    	});
    };


    showAllPosts();

});