"use strict";

console.log('inside of factory-posts.js');


app.factory("postsFactory", function($q, $http, FBCreds){

    const getAllPosts = function(user){
        let posts = [];
        console.log("url ", `${FBCreds.databaseURL}/posts.json?orderBy="uid"&equalTo="${user}"`);
        return $q( (resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/posts.json?orderBy="uid"&equalTo="${user}"`)
            .then((itemObject) => {
                let itemCollection = itemObject.data;
                console.log("itemCollection", itemCollection);
                Object.keys(itemCollection).forEach((key) => {
                    itemCollection[key].id = key;
                    posts.push(itemCollection[key]);
                });
                resolve(posts);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    /************ Photos ************/
    let saveImage = function (imageBlob, user) {
        // initiate storage reference
        let storageReference = firebase.storage().ref();
        let newPhotoObject = {};
        // store reference to a variable to later delete  item in storagebucket
        let holdStorageChild = storageReference.child(`"images/${user}.png"`);
        newPhotoObject.storage_ref = holdStorageChild.location.path;
        return $q( (resolve, reject) => {
            holdStorageChild.put(imageBlob)
            .then((response) => {
                return holdStorageChild.getDownloadURL();
            })
            .then( (picObj) => {
                newPhotoObject.url = picObj;
                newPhotoObject.uid = user;
                return $http.post(`${FBCreds.databaseURL}/.json`, newPhotoObject);
            })
            .then( (key) => {
                newPhotoObject.key = key.data.name;
                resolve(newPhotoObject);
            })
            .catch( (error) => {
                reject(error);
            });

        });
    };

    const addPost = function(obj){
        let newObj = JSON.stringify(obj);
        return $http.post(`${FBCreds.databaseURL}/posts.json`, newObj)
        .then( (data) => {
            console.log("data", data);
            return data;
        }, (error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log("error", errorCode, errorMessage);
        });
    };

    const editPost = function(id, obj) {
        console.log("id and obj to update", id, obj);
        return $q((resolve, reject) => {
            let newObj = JSON.stringify(obj);
            $http.patch(`${FBCreds.databaseURL}/posts/${id}.json`, newObj)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    const deletePost = function(id){
        return $q( (resolve, reject) => {
            $http.delete(`${FBCreds.databaseURL}/posts/${id}.json`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    const getSinglePost = function(itemId){
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/posts/${itemId}.json`)
            .then((itemObj) => {
            resolve(itemObj.data);
            })
            .catch((error) => {
            reject(error);
            });
        });
    };

    return {getAllPosts, addPost, editPost, deletePost, getSinglePost};
});