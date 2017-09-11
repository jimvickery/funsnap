"use strict";

console.log('inside of control-notes.js');


app.controller("noteCtrl", function($scope, notesFactory, userFactory, filterFactory, $rootScope){

	$scope.picArray = [];
	let user = userFactory.getCurrentUser();
	$rootScope.showSearch = true; 
	$scope.searchText = filterFactory;


    const showAllpics = function(){
    	notesFactory.getAllNotes(user)
    	.then((picArray) => {
    		console.log("showAllpics from promise", picArray);
    		$scope.picArray =  picArray;
    	});
    };

    
    $scope.deleteNote = function(id){
    	notesFactory.deleteNote(id)
    	.then(() => {
    		showAllpics();
    	});
    };

    $scope.toggleDoneNote = function(obj){
    	console.log("toggleDoneNote", obj.isCompleted);
    	let status = obj.isCompleted ? true : false; 
    	let tempObj = {isCompleted:status};
    	notesFactory.editNote(obj.id, tempObj)
    	.then( () => {
    		console.log("then is updated");
    		showAllpics();
    	});
    };

    showAllpics();

});