"use strict";

/*
    
    handle data for detail view

 */

app.controller("detailNoteCtrl", function($scope, $routeParams, notesFactory){

	console.log("itemId", $routeParams.itemId);

    const showNote = function(){
    	notesFactory.getSingleNote($routeParams.itemId)
    	.then((data) => {
    		$scope.note = data;
    		$scope.note.id = $routeParams.itemId;
    	});
    };

    showNote();
});