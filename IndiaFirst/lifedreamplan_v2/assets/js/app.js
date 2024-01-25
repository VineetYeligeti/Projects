var ifApp = angular.module("myApp", [])

// controller for Date of Birth
ifApp.controller("termFormController", function($scope) {
    $scope.dobOnchange = function(age, dob){
    }
    $scope.popupDobOnchange = function(age, dob){
    }
    // function for showing nominee when it is minor
    $scope.nomineeDobOnchange = function(age, dob){
        if (age < 18) {
            $(".nomineeDetBlock").fadeIn()
        }else{
            $(".nomineeDetBlock").hide()
        }
    }
    $scope.appointeeDobOnchange = function(age, dob){
    }
});


ifApp.controller('premiumController', function($scope) {
    // controller for premium page - disable benefit when Sum Assured is greaer than 1 crore
    $scope.benefitDisable = function() {
        var inputVal = $('#premiumStepper').find('input').val();
        var newVal = removeCommas(inputVal);           
    }

    // controller for premium page -Critical Illness Protector Benefit Popup and Sum Assured information show/hide
    $scope.sumAssured = '1'
    $scope.isShown = function(sumAssured) {

        return sumAssured === $scope.sumAssured;
    };

});
/*---------Controller is for FOrm validation -----------------*/
ifApp.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.irbIncome = "";
    $scope.irbErrClass = false;
    $scope.cityList = [{
        "cityId": 1,
        "name": "Mumbai"
    }, {
        "cityId": 2,
        "name": "Pune"
    }, {
        "cityId": 3,
        "name": "Thane"
    }, {
        "cityId": 4,
        "name": "Thiruvananthapuram"
    }];

    $scope.stateList = [{
        "stateId": 1,
        "name": "Maharashtra"
    }, {
        "stateId": 2,
        "name": "Punjab"
    }, {
        "stateId": 3,
        "name": "Goa"
    }];

     $scope.countryList = [{
        "countryId": 1,
        "name": "USA"
    }, {
        "countryId": 2,
        "name": "UK"
    }, {
        "countryId": 3,
        "name": "India"
    }, {
        "countryId": 4,
        "name": "Canada"
    }];

    setTimeout(function() { $(".selectpicker").selectpicker('refresh'); }, 100);

    $scope.keyfnctn = function(id) {
        document.getElementById(id).nextElementSibling.nextElementSibling.innerHTML = "";

    };

    $scope.minAmnt = function() {
        // console.log($scope.irbIncome);
        // $scope.irbIncome = parseInt($scope.irbIncome) + 2;
        // console.log($scope.irbIncome);
        if ($scope.irbIncome < 220000 && $scope.irbIncome!="") {
            $scope.irbIncomeErr="To avail this benefit, your annual income should be above 2,20,000.";
            $scope.irbErrClass = true;
        }else if($scope.irbIncome =="" || $scope.irbIncome == null){
            $scope.irbIncomeErr="Please enter your annual income.";
            $scope.irbErrClass = true;
        }else{
            $scope.irbIncomeErr="";
            $scope.irbErrClass = false;
        }
        
    }

    $scope.minAmtKeyUp = function() {
        $scope.irbIncomeErr="";
        $scope.irbErrClass = false;

    }
    

    $scope.formsbmt = function(string) {

        $scope.spacesInFname = $scope.fullname.split(" ").length - 1;
        if ($scope.spacesInFname < 1) {
            $scope.nameErr = "Enter Fullname.";
        } else {
            $scope.nameErr = "";
        }

    };

    $scope.ExistingCustomer = function(string) {

        $scope.ExistingMember = !$scope.ExistingMember;
    };

    $scope.clickfnctn = function(string) {

        $scope.test = string;
    };

    $scope.test = "";
    $scope.ExistingMember = true;
    $scope.nameErr = "";
    $scope.placeOfBirth = true;
    $scope.citizenoutofIndia = true;
    $scope.residentoutofIndia = true;
}]);

