var myApp = angular.module('DemoApp', []);

myApp.controller('HelloCtrl', function ($scope) {

    $scope.tasks = ['Do something important', 'Another thing to do', 'Don\'t forget this'];

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