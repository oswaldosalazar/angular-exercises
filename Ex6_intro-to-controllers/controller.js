app.controller("MyFirstController", function($scope) {
    $scope.name = "Severus Snape";
});

app.controller("ExerciseController", function($scope) {
    $scope.FavColor = "blue";
    $scope.secondsInACentury = 100*365*86400;
    $scope.rightNow = Date.now();
})

app.controller("MadLibs", function($scope) {

    $scope.ShowHide = function () {
        $scope.IsVisible = $scope.IsVisible ? false: true;
    };
    $scope.ShowHideAndEmpty = function () {
        $scope.IsVisible = $scope.IsVisible ? false: true;
        $scope.boySName = "";
        $scope.adjective = "";
        $scope.pluralNoun1 = "";
        $scope.pluralNoun2 = "";
        $scope.insectPlural = "";
        $scope.pluralNoun3 = "";
        $scope.verbEndingS = "";
    };
})
