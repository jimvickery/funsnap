"use strict";

console.log('inside of control-edit.js');


app.controller("editNoteCtrl", function($scope, notesFactory, $routeParams, $location){

	$scope.title = "Edit Note";
	$scope.submitButtonText = "Edit Item";

	$scope.note = {
		createdBy: "",
		createdDate: "",
		note: ""
	};

    const showEditNote = function(){
    	notesFactory.getSingleNote($routeParams.itemId)
    	.then((data) => {
    		console.log("data", data);
    		$scope.note = data;
    		$scope.note.id = $routeParams.itemId;
    	});
    };

    $scope.submitNote = function(){
    	notesFactory.editNote($routeParams.itemId, $scope.note)
    	.then((data) => {
    		$location.path("/note-list");
    	});
    };


    showEditNote();
});