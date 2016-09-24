(function() {
    'use strict';

    var toriPortfolio = angular.module("ToriPortfolio", ["ngRoute"]);

    toriPortfolio.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'controller'
            })
            .when('/gallery', {
                templateUrl: 'pages/gallery.html',
                controller: 'controller'
            })
            .when('/about', {
                templateUrl: 'pages/about.html',
                controller: 'controller'
            })
            .when('/contact', {
                templateUrl: 'pages/contact.html',
                controller: 'controller'
            })
            .otherwise({
                redirectTo: "/"
            });
    });

    toriPortfolio.controller('controller', function($scope) {
        // Highlight current page on nav menu
        $(".current_page").removeClass("current_page");
        $(".nav a").each(function() {
            if(window.location.hash.slice(2) === $(this).text().toLowerCase()) {
                $(this).addClass("current_page");
            }
        });
    });
})();