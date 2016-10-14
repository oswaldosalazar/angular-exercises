// app.controller("MouseEnterController", function($scope, $timeout) {
//     $scope.view = {};
//     $scope.view.enterCount = 0;
//     $scope.view.passColor = "black";
//     $scope.view.colorArray = [];
//     $scope.view.randomColor = function () {
//         $scope.view.enterCount += 1;
//         var x = Math.round(0xffffff * Math.random()).toString(16);
//         var y = (6-x.length);
//         var z = "000000";
//         var z1 = z.substring(0,y);
//         color = "#" + z1 + x;
//         $scope.view.passColor = color;
//         $scope.view.colorArray.push(color)
//     }
//
//     $scope.view.replay = function() {
//         $scope.view.reversedArray = $scope.view.colorArray.reverse()
//
//         for( var i = 0; i < $scope.view.reversedArray.length; i++) {
//             (function(i){
//             $timeout( function(){
//                 $scope.view.callAtTimeout($scope.view.reversedArray[i]);
//             }, i * 1000);
//             })(i)
//         }
//         $scope.view.callAtTimeout = function(elementColor) {
//             console.log(elementColor);
//             $scope.view.passColor = elementColor;
//         }
//     }
// })

// app.controller("submitController", function($scope) {
//     $scope.favoriteForm = {};
//     $scope.submitFav = function() {
//         var favPi = parseFloat($scope.favoriteForm.favoritePie);
//         if (!isNaN(favPi) && favPi >= 3.14 && favPi <= 3.142) {
//             $scope.favoriteForm.favoritePie = "\u03A0";
//         }
//         console.log("Your favorite pie is: ", $scope.favoriteForm.favoritePie)
//     }
// })

// app.controller("addressController", function($scope) {
//     $scope.submitAddress = {};
//     $scope.submitFunction = function() {
//         $scope.submitAddress.firstLine1 = $scope.submitAddress.firstLine;
//         $scope.submitAddress.firstLine = "";
//         $scope.submitAddress.secondLine1 = $scope.submitAddress.secondLine;
//         $scope.submitAddress.secondLine = "";
//         $scope.submitAddress.city1 = $scope.submitAddress.city;
//         $scope.submitAddress.city = "";
//         $scope.submitAddress.state1 = $scope.submitAddress.state;
//         $scope.submitAddress.state = "";
//         $scope.submitAddress.zipCode1 = $scope.submitAddress.zipCode;
//         $scope.submitAddress.zipCode = "";
//
//         console.log($scope.submitAddress.zipCode)
//     }
// })

app.controller("contactsController", function($scope) {
    $scope.list = [];
    $scope.newContact = {};
    $scope.addContact = function() {
        $scope.list.push( {
            'name': $scope.newContact.contactName,
            'email': $scope.newContact.email,
            'phone': $scope.newContact.phone
        });
        $scope.list.seach = "";
        $scope.newContact = {};
    }
})
