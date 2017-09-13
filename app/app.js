"use strict";
console.log('inside of app.js');


const app = angular.module("FunSnapApp", ["ngRoute"]);

let isAuth = (userFactory) => new Promise ( (resolve, reject) => {
  console.log("userFactory is", userFactory);
  userFactory.isAuthenticated()
  .then( (userExists) => {
    if(userExists){
      console.log("Authenticated, you can go in");
      resolve();
    }else {
      console.log("Authentication reject, GO AWAY");
      reject();
    }
  });
});


app.config(($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/post.html',
		controller: 'postCtrl',
		resolve: {isAuth}
	})
	.when('/login', {
		templateUrl: 'partials/user.html',
		controller: 'userCtrl',
	})
	.when('/post/newPost', {
		templateUrl: 'partials/form.html',
		controller: 'addPostCtrl',
		resolve: {isAuth}
	})
	.when('/post-list', {
		templateUrl: 'partials/post.html',
		controller: 'postCtrl',
		resolve: {isAuth}
	})
	.when('/post/:itemId', {
		templateUrl: 'partials/details.html',
		controller: 'detailPostCtrl',
		resolve: {isAuth}
	})
	.when('/post/:itemId/edit', {
		templateUrl: 'partials/form.html',
		controller: 'editPostCtrl',
		resolve: {isAuth}
    })
    .otherwise('/');
});


app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL
	};

	firebase.initializeApp(authConfig);


app.run(function($rootScope) {
	$rootScope.showSearch = false;
	});
});