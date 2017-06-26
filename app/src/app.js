var app = angular.module("App", ['ngRoute']);

app
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/login', {
                    templateUrl: 'layout/login/login.html',
                    controller: 'LoginController'
                }).
                when('/home', {
                    templateUrl: 'layout/home/home.html',
                    controller: 'HomeController'
                }).
                when('/order', {
                    templateUrl: 'layout/order/order.html',
                    controller: 'OrderController'
                }).
                when('/settings', {
                    templateUrl: 'layout/settings/settings.html',
                    controller: 'SettingsController'
                }).
                otherwise({
                    redirectTo: '/login'
                });
        }
    ]);



