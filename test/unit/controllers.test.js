'use strict';
describe('TaskList Controller', function () {
    var ctrl, scope;


    beforeEach(function () {
        module('DemoApp', function () {
        });
        inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('TaskListCtrl', {$scope: scope});
        });
    });

    afterEach(function () {
        scope.$destroy();
    });

    it('should start with no tasks', function () {
        expect(scope.tasks).toBeDefined();
        expect(scope.tasks.length).toBe(0);
    });

    it('should add a new task', function () {
        scope.addTask('hello world');
        expect(scope.tasks.length).toBe(1);
        expect(scope.tasks[0]).toEqual('hello world');
    });

    it('should delete a task', function () {
        scope.addTask('hello world');
        expect(scope.tasks.length).toBe(1);
        scope.deleteTask(0);
        expect(scope.tasks.length).toBe(0);
    });

});

