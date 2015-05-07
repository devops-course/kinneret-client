'use strict';
describe('TaskList Controller', function () {
    var ctrl, scope, httpBackend;


    beforeEach(function () {
        module('DemoApp', function () {
        });
        inject(function ($rootScope, $controller, $httpBackend) {
            httpBackend = $httpBackend;
            scope = $rootScope.$new();
            ctrl = $controller('TaskListCtrl', {$scope: scope});
            httpBackend.expectGET('/tasks').respond(200, []);

        });
    });

    function flushAndApply() {
        httpBackend.flush();
        scope.$apply();
    }

    afterEach(function () {
        scope.$destroy();
    });

    it('should start with no tasks', function () {
        flushAndApply();
        expect(scope.tasks).toBeDefined();
        expect(scope.tasks.length).toBe(0);
    });

    it('should add a new task', function () {
        httpBackend.expectPOST('/tasks', {'description': 'hello world'}).respond(200);
        httpBackend.expectGET('/tasks').respond(200, [{id: '999', description: 'hello world'}]);
        scope.addTask('hello world');
        flushAndApply();
        expect(scope.tasks.length).toBe(1);
        expect(scope.tasks[0].description).toEqual('hello world');
        expect(scope.tasks[0].id).toEqual('999');
    });

    it('should delete a task', function () {
        httpBackend.expectPOST('/tasks', {'description': 'hello world'}).respond(200);
        httpBackend.expectGET('/tasks').respond(200, [{id: '999', description: 'hello world'}]);
        scope.addTask('hello world');
        flushAndApply();
        expect(scope.tasks.length).toBe(1);

        httpBackend.expectDELETE('/tasks/999').respond(200);
        httpBackend.expectGET('/tasks').respond(200, []);
        scope.deleteTask(scope.tasks[0]);
        flushAndApply();
        expect(scope.tasks.length).toBe(0);
    });

});

