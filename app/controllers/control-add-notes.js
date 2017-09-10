"use strict";

console.log('inside of control-add.js');


app.controller("addNoteCtrl", function($scope, notesFactory, $location, userFactory){

	$scope.title = "New Note";
	$scope.submitButtonText = "Add Note";
	

	let user = userFactory.getCurrentUser();

	$scope.note = {
		createdBy: "",
		createdDate: $scope.value = new Date().toString().split("T")[0],
		note: "",
		uid: user
	};

    $scope.submitNote = function(){
    	
    	notesFactory.addNote($scope.note)
    	.then((data) => {
    		$location.url("/note-list");
    	});
    };



});