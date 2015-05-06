var myApp = angular.module('DemoApp', []);

myApp.controller('TaskListCtrl', function ($scope, $http) {

    $scope.tasks = [];
    $scope.busy = true;

    function refresh() {
        $http.get('/tasks').success(function (data, status, headers, config) {
            $scope.tasks = data;
            $scope.busy = false;
        });
    }

    refresh();

    $scope.addTask = function (newTaskText) {
        //$scope.tasks.push(newTaskText);
        $scope.busy = true;
        $http.post('/tasks', {description: newTaskText}).success(function () {
            refresh();
        })
        $scope.clearTaskText();
    };

    $scope.clearTaskText = function () {
        $scope.newTaskText = '';
    };

    $scope.deleteTask = function (task) {
        //$scope.tasks.splice(index, 1);
        $scope.busy = true;
        $http.delete('/tasks/' + task.id).success(function () {
            refresh();
        });
    };


});

/*

 Server API

 run the server:
 in folder: server/kinneret-server/target
 run the command: java -jar kinneret-server-1.0-SNAPSHOT.jar server ../kinneret-server.yml

 list:
 GET http://localhost:9000/tasks
 add:
 POST http://localhost:9000/tasks
 with headers:
 Content-Type: application/json
 with payload:
 {"description": "feed the octopus"}
 remove:
 DELETE http://localhost:9000/tasks/{id}
 */