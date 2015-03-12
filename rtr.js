angular.module('rtr', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('rtr', {
                url: '/',
                views: {
                    header: {
                        templateUrl: 'rtr/header.html'
                    },
                    content: {
                        templateUrl: 'rtr/content.html'
                    },
                    footer: {
                        templateUrl: 'rtr/footer.html'
                    }
                }
            })
            .state('rtr.changesim', {
                url: 'changesim',
                views: {
                    'header@': {
                        templateUrl: 'rtr/changesim/header.html'
                    },
                    'content@': {
                        templateUrl: 'rtr/changesim/content.html'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
