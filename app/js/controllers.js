var myApp = angular.module('DemoApp', []);

myApp.controller('TaskListCtrl', function ($scope) {

    $scope.tasks = [];

    $scope.addTask = function (newTaskText) {
        $scope.tasks.push(newTaskText);
        $scope.clearTaskText();
    };

    $scope.clearTaskText = function () {
        $scope.newTaskText = '';
    };

    $scope.deleteTask = function (index) {
        $scope.tasks.splice(index, 1);
    };

});