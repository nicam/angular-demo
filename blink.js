angular.module('app', [])
    .directive('blink', function($timeout) {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function($scope, $element) {
            var colors = ['red', 'green', 'blue', 'orange', 'cyan'];
            var idx = 0;

            function showElement() {
                $element.css("color", colors[idx++ % colors.length]);
                $element.css("display", "inline");
                $timeout(hideElement, 150);
            }

            function hideElement() {
                $element.css("display", "none");
                $timeout(showElement, 150);
            }
            showElement();
        },
        template: '<span ng-transclude></span>',
        replace: true
    };
});