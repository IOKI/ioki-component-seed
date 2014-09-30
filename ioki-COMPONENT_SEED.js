angular.module('ioki.COMPONENT_SEED', [])
    .directive("COMPONENT_SEED", function () {
        'use strict';

        return {
            restrict: 'E',
            template: 'templates/ioki-COMPONENT_SEED'
        };
    });
angular.module('ioki.COMPONENT_SEED').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/ioki-COMPONENT_SEED',
    "<p>Template of COMPONENT_SEED</p>"
  );

}]);
