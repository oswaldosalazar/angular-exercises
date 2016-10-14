app.controller("MyController", function($scope) {
    $scope.view = {};
    $scope.view.number = 5;
    $scope.view.pickRandomNumber = function() {
        $scope.view.number = Math.floor(Math.random() * 10) + 1;
    }
    $scope.view.original = '';
    $scope.view.Reverse = function() {
        $scope.view.original = $scope.view.original.split("").reverse().join("");
    }
});

app.controller("PingPongController", function($scope) {
    $scope.view = {};
    $scope.view.scoreOne = 0;
    $scope.view.scoreTwo = 0;
    $scope.view.serving = 0;
    $scope.view.scoreOneCounter = function () {
        if($scope.view.scoreOne < 11) {
            $scope.view.scoreOne += 1;
            $scope.view.serving += 1;
            if($scope.view.serving === 2) {
                $scope.view.serving = 0;
                $scope.view.servingTwoFlag = true;
            } else {
                $scope.view.servingTwoFlag = false;
                $scope.view.servingOneFlag = false;
            }
        } else {
            $scope.view.Reset();
        }
        if($scope.view.scoreOne === 11) {
            $scope.view.oneWon = true;
            $scope.view.twoLost = true;
            $scope.view.reset = false;
        }
    }
    $scope.view.scoreTwoCounter = function () {
        if($scope.view.scoreTwo < 11) {
            $scope.view.scoreTwo += 1;
            $scope.view.serving += 1;
            if($scope.view.serving === 2) {
                $scope.view.serving = 0;
                $scope.view.servingOneFlag = true;
            } else {
                $scope.view.servingOneFlag = false;
                $scope.view.servingTwoFlag = false;
            }
        } else {
            $scope.view.Reset();
        }
        if($scope.view.scoreTwo === 11) {
            $scope.view.twoWon = true;
            $scope.view.oneLost = true;
            $scope.view.reset = false;
        }
    }
    $scope.view.Reset = function () {
        $scope.view.scoreOne = 0;
        $scope.view.scoreTwo = 0;
        $scope.view.oneLost = false;
        $scope.view.twoLost = false;
        $scope.view.reset = true;
    }
})
