(function () {
    'use strict';

    angular
        .module('app.module')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'moduleDash.employee.entry',
                config: {
                    url: '/employeeEntry',
                    title: 'Employee Entry',
                    views: {
                        '@': {
                            templateUrl: 'app/module_dash/employee/module/admin/employeeEntry/entry.html',
                            controller: 'EntryController',
                            controllerAs: 'vm'
                        }
                    },
                    ncyBreadcrumb: {
                        label: 'Employee Entry'
                    }
                }
            }
        ];
    }

})();

