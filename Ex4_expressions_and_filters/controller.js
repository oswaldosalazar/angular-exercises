app.controller("myController", function($scope) {
    $scope.example = {};
    $scope.example.sum = 1 + 2;
    $scope.example.firstName = "BoJack";
    $scope.example.secondName = "Horseman";
    $scope.example.array = [99, 43, 22];
    $scope.example.length = $scope.example.array.length;
    $scope.example.decimal = null;
    $scope.example.pi = Math.PI;
    $scope.example.decimals = [0,1,2,3,4,5,6,7];
    $scope.example.model = null;
    $scope.example.percentages = [
        {id:"10%" ,value:0.1 },
        {id:"15%" ,value:0.15 },
        {id:"20%" ,value:0.2 }
    ];
});
