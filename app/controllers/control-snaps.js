"use strict";

console.log('inside of control-posts.js');


app.controller("postCtrl", function($scope, postsFactory, userFactory, filterFactory, $rootScope){

	// initializes an empty array thats filled in showAllPosts function for use in posts view and details view
	$scope.postsArray = [];

	let user = userFactory.getCurrentUser();
	$rootScope.showSearch = true; 
	$scope.searchText = filterFactory;


	// puts all the posts into an array
	const showAllPosts = function(){
		postsFactory.getAllPosts(user)
    	.then((postsArray) => {
    		console.log("showAllPosts from promise", postsArray);
    		$scope.postsArray =  postsArray;
    	});
    };

	// calls the showallPosts function
	showAllPosts();
	
	

	//sets up next button 



	


});