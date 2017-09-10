"use strict";

console.log('inside of control-notes.js');


app.controller("noteCtrl", function($scope, notesFactory, userFactory, filterFactory, $rootScope){

	$scope.notesArray = [];
	let user = userFactory.getCurrentUser();
	$rootScope.showSearch = true; 
	$scope.searchText = filterFactory;


    const showAllnotes = function(){
    	notesFactory.getAllNotes(user)
    	.then((notesArray) => {
    		console.log("showAllnotes from promise", notesArray);
    		$scope.notesArray =  notesArray;
    	});
    };

    
    $scope.deleteNote = function(id){
    	notesFactory.deleteNote(id)
    	.then(() => {
    		showAllnotes();
    	});
    };

    $scope.toggleDoneNote = function(obj){
    	console.log("toggleDoneNote", obj.isCompleted);
    	let status = obj.isCompleted ? true : false; 
    	let tempObj = {isCompleted:status};
    	notesFactory.editNote(obj.id, tempObj)
    	.then( () => {
    		console.log("then is updated");
    		showAllnotes();
    	});
    };

    showAllnotes();

});