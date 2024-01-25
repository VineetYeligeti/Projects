// var app = angular.module('myApp', []);

//---------------------------------------------Directives------------------------------------------//

ifApp.directive('numberOnly', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, ngModelCtrl, $scope) {
            function fromUser(text) {
                var transformedInput = text.replace(/[^0-9]/g, '');
                if (transformedInput !== text) {
                    var i = element[0].id;
                    document.getElementById(i).nextElementSibling.nextElementSibling.innerHTML = "Only numbers are allowed";
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

ifApp.directive('moreFive', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, ngModelCtrl, $scope) {
            function fromUser(text) {
                var transformedInput = text.replace(/[^5-9]/g, '');
                if (transformedInput !== text) {
                    var i = element[0].id;
                    document.getElementById(i).nextElementSibling.nextElementSibling.innerHTML = "Weight entered should be more than 5kgs";
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

ifApp.directive('charOnly', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, ngModelCtrl, $scope) {
            function fromUser(text) {
                var transformedInput = text.replace(/[^a-zA-Z]/g, '');

                if (transformedInput !== text) {
                    var i = element[0].id;
                    //document.getElementById(i).nextElementSibling.innerHTML = "";
                    document.getElementById(i).nextElementSibling.nextElementSibling.innerHTML = "Only characters are allowed";
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

ifApp.directive('fullName', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, ngModelCtrl, $scope) {
            function fromUser(text) {
                var transformedInput = text.replace(/[^a-zA-Z' ]/g, '');

                if (transformedInput !== text) {
                    var i = element[0].id;
                    document.getElementById(i).nextElementSibling.nextElementSibling.innerHTML = "Only alphabets are allowed";
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

ifApp.directive('alphaNumeric', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, ngModelCtrl, $scope) {
            function fromUser(text) {
                var transformedInput = text.replace(/[^a-zA-Z0-9]/g, '');

                if (transformedInput !== text) {
                    var i = element[0].id;
                    document.getElementById(i).nextElementSibling.nextElementSibling.innerHTML = "Special characters are not allowed";
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

ifApp.directive('validEmail', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, control) {
            control.$parsers.push(function(viewValue) {
                var newEmail = control.$viewValue;
                control.$setValidity("invalidEmail", true);
                if (typeof newEmail === "object" || newEmail == "") return newEmail; // pass through if we clicked date from popup
                if (!newEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
                    control.$setValidity("invalidEmail", false);
                }
                return viewValue;
            });
        }
    };
});