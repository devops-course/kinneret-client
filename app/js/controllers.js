var myApp = angular.module('DemoApp', []);

myApp.controller('HelloCtrl', function ($scope) {

    $scope.name = 'stranger, please click the button below.';

    $scope.setName = function () {
        $scope.name = 'World!';
    }

});