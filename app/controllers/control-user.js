"use strict";
console.log('inside of control-user.js');


app.controller("userCtrl", function ($scope, $window, userFactory, $location) {
        
        $scope.account = {
            email: "",
            password: ""
        };
    
        $scope.register = () => {
            console.log('you clicked on register');
            userFactory.register({
                email: $scope.account.email,
                password: $scope.account.password
            })
            .then((userData) => {
                console.log('User controller newUser', userData);
                $scope.logIn();
            }, (error) => {
                console.log('error creating new user', error);	
            });
        };
        
        $scope.logIn = () => {
            userFactory.logIn($scope.account)
            .then( () => {
                $window.location.href = "#!/post-list";
            });
        };
    
        let logout = () => {
            console.log("logout clicked");
            userFactory.logOut()
              .then(function () {
                console.log("logged out DONE");
                //no need to redirect since isAuth verifies login and will take care of re-direction
                // $location.href = "#!/";
              }, function (error) {
                console.log("error occured on logout");
              });
      };
    
        $scope.loginGoogle = () => {
            console.log("clicked on google login");
    
            userFactory.authWithProvider()
            .then( (result) =>{
                let user = result.user.uid;
                $location.path("/post-list");
                $scope.$apply();
            }).catch( (error) => {
                console.log("error with google login");
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log("errors", errorCode, errorMessage);
            });
        };
    
    });