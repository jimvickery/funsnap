"use strict";

console.log('inside of control-notes.js');


app.controller("noteCtrl", function($scope, notesFactory, userFactory){

	$scope.notes = [];
	let use = userFactory.getCurrentUser();

    const showAllnotes = function(){
    	notesFactory.getAllNotes()
    	.then((notes) => {
    		console.log("showAllnotes from promise", notes);
    		$scope.notes =  notes;
    	});
    };

    
    $scope.deleteNote = function(id){
    	notesFactory.deleteNote(id)
    	.then( (irrelevant) => {
    		showAllnotes();
    	});
    };

    $scope.toggleDoneNote = function(obj){
    	console.log("toggleDoneNote", obj.isCompleted);
    	let status = obj.isCompleted ? true : false; 
    	let tmpObj = {isCompleted:status};
    	notesFactory.editNote(obj.id, tmpObj)
    	.then( () => {
    		console.log("then is updated");
    		showAllnotes();
    	});
    };

    showAllnotes();

});