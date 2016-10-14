app.controller("controller", function($scope) {
    $scope.numbers = [1,1,2,5,6,9,9,9];
    $scope.filteredNumbers = $scope.numbers.filter (function(elem, pos) {
        return $scope.numbers.indexOf(elem) === pos
    })
    $scope.first = [1, 2 , 3, 4, 5, 6, 7, 8, 9];
    $scope.second = [
        {name:"mike", age:23},
        {name:"andy", age:34},
        {name:"reid", age:45},
        {name:"reid", age:45}
    ];
    $scope.third = {name: "mike", age: 35, title: "Mr."};
    $scope.fourth = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
});
