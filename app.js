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

        if($(".pswp").length) {
            var pswpElement = $('.pswp')[0];

            // build items array
            var items = [
                {
                    src: 'images/ghost_dogs/ghost_dogs.jpg',
                    title: 'Forest Spirits',
                    w: 648,
                    h: 1073
                },
                {
                    src: 'images/jun_room/jun_room.jpg',
                    title: 'Jun\'s Room',
                    w: 1200,
                    h: 671
                },
                {
                    src: 'images/thief/thief.jpg',
                    title: 'Thief Hands',
                    w: 648,
                    h: 1070
                },
                {
                    src: 'images/kappa/kappa.jpg',
                    title: 'Kappa',
                    w: 1240,
                    h: 1245
                },
                {
                    src: 'images/mermaid/mermaid.jpg',
                    title: 'Mermaid',
                    w: 551,
                    h: 758
                },
                {
                    src: 'images/tea_party/tea_party.jpg',
                    title: 'Tea Party',
                    w: 735,
                    h: 936
                },
                {
                    src: 'images/2_headed/2_headed.gif',
                    title: '2 Headed Dog',
                    w: 900,
                    h: 675
                },
                {
                    src: 'images/sketches/compass.jpg',
                    title: 'Sketch 1/4',
                    w: 600,
                    h: 600
                },
                {
                    src: 'images/sketches/doggy.jpg',
                    title: 'Sketch 2/4',
                    w: 600,
                    h: 480
                },
                {
                    src: 'images/sketches/sailor_moon.png',
                    title: 'Sketch 3/4',
                    w: 600,
                    h: 600
                },
                {
                    src: 'images/sketches/summer_2013.jpg',
                    title: 'Sketch 4/4',
                    w: 640,
                    h: 640
                }

            ];

            // define options (if needed)
            var options = {
                // history & focus options are disabled on CodePen
                history: false,
                focus: false,
                index: 0,

                showAnimationDuration: 0,
                hideAnimationDuration: 0

            };

            $(".gallery a").on("click", function(e) {
                e.preventDefault();
                options.index = parseInt(this.dataset.index);
                var pswpGallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
                pswpGallery.init();
            });
        }
    });
})();