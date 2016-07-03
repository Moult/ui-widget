myapp.element.booleanToggler = angular.module('myapp.element.booleanToggler', []);

myapp.element.booleanToggler.directive('booleanToggler', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attributes) {
            scope.switch = new myapp.widget.switch();
            element.on('click', function() {
                scope.switch.flick();
                scope.$apply();
            });
            scope.$watch('switch.isOn', function() {
                console.log('Switch is on: ' + scope.switch.isOn);
            });
        }
    }
});
