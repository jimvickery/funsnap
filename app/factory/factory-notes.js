"use strict";

console.log('inside of factory-notes.js');


app.factory("notesFactory", function($q, $http, FBCreds){

    const getAllNotes = function(user){
        let notes = [];
        console.log("url ", `${FBCreds.databaseURL}/notes.json?orderBy="uid"&eaulTo="${user}"`);
        return $q( (resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/notes.json?orderBy="uid"&eaulTo="${user}"`)
            .then((itemObject) => {
                let itemCollection = itemObject.data;
                console.log("itemCollection", itemCollection);
                Object.keys(itemCollection).forEach((key) => {
                    itemCollection[key].id = key;
                    notes.push(itemCollection[key]);
                });
                resolve(notes);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const addNote = function(obj){
        let newObj = JSON.stringify(obj);
        return $http.post(`${FBCreds.databaseURL}/notes.json`, newObj)
        .then( (data) => {
            console.log("data", data);
            return data;
        }, (error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log("error", errorCode, errorMessage);
        });
    };

    const editNote = function(id, obj) {
        console.log("id and obj to update", id, obj);
        return $q((resolve, reject) => {
            let newObj = JSON.stringify(obj);
            $http.patch(`${FBCreds.databaseURL}/notes/${id}.json`, newObj)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    const deleteNote = function(id){
        return $q( (resolve, reject) => {
            $http.delete(`${FBCreds.databaseURL}/notes/${id}.json`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    const getSingleNote = function(itemId){
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/notes/${itemId}.json`)
            .then((itemObj) => {
            resolve(itemObj.data);
            })
            .catch((error) => {
            reject(error);
            });
        });
    };

    return {getAllNotes, addNote, editNote, deleteNote, getSingleNote};
});