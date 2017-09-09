"use strict";
console.log('inside of app.js');


const app = angular.module("NotesApp", ["ngRoute"]);

let isAuth = (userFactory) => new Promise ( (resolve, reject) => {
  console.log("userFactory is", userFactory);
  userFactory.isAuthenticated()
  .then( (userExists) => {
    if(userExists){
      console.log("Authenticated, go ahead");
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
		templateUrl: 'partials/note.html',
		controller: 'noteCtrl',
		// resolve: {isAuth}
	})
	.when('/login', {
		templateUrl: 'partials/user.html',
		controller: 'userCtrl'
	})
	.when('/note-list', {
		templateUrl: 'partials/note.html',
		controller: 'noteCtrl',
		// resolve: {isAuth}
	})
	.when('/note/newNote', {
		templateUrl: 'partials/form.html',
		controller: 'addNoteCtrl'
	})
	.when('/note/:itemId', {
		templateUrl: 'partials/details.html',
		controller: 'detailNoteCtrl',
		// resolve: {isAuth}
	})
	.when('/note/:itemId/edit', {
		templateUrl: 'partials/form.html',
		controller: 'editNoteCtrl',
		// resolve: {isAuth}
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
});

app.run(function($rootScope) {
	$rootScope.showSearch = false;
});