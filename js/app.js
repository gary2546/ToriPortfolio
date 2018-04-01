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

        $('.nav a, .navbar-brand').on('click', function(){
            $(".navbar-collapse").collapse('hide');
        });

        if($(".pswp").length) {
            var pswpElement = $('.pswp')[0];

            // build items array
            var items = [
                {
                    src: 'images/midnight_sphynx/midnight_sphynx.jpg',
                    title: 'Midnight Sphynx',
                    w: 1979,
                    h: 2700
                },
                {
                    src: 'images/mead_moon/mead_moon.jpg',
                    title: 'Mead Moon',
                    w: 1908,
                    h: 3000
                },
                {
                    src: 'images/defensive/defensive.jpg',
                    title: 'Defensive',
                    w: 2035,
                    h: 2960
                },
                {
                    src: 'images/mermay_2/mermay_2.jpg',
                    title: 'Encircle',
                    w: 2225,
                    h: 3104
                },
                {
                    src: 'images/mermay_1/mermay_1.jpg',
                    title: 'Mermaid Warrior',
                    w: 1667,
                    h: 2400
                },
                {
                    src: 'images/kung_fu_kenny/kung_fu_kenny.jpg',
                    title: 'Kung Fu Kenny',
                    w: 1811,
                    h: 2700
                },
                {
                    src: 'images/pursuit/pursuit.jpg',
                    title: 'Pursuit',
                    w: 1705,
                    h: 2327
                },
                {
                    src: 'images/consumed/consumed.jpg',
                    title: 'Consumed',
                    w: 1800,
                    h: 2283
                },
                {
                    src: 'images/siamese_familiar/siamese_familiar.jpg',
                    title: 'Corner of the Woods',
                    w: 900,
                    h: 994
                },
                {
                    src: 'images/rooster_year/rooster_year.jpg',
                    title: 'Year of the Rooster',
                    w: 2175,
                    h: 2400
                },
                {
                    src: 'images/widowmaker/widowmaker.jpg',
                    title: 'Widowmaker',
                    w: 1376,
                    h: 1800
                },
                {
                    src: 'images/flower_witch/flower_witch.jpg',
                    title: 'In Bloom - Flower Witch',
                    w: 1086,
                    h: 1500
                },
                {
                    src: 'images/resurface/resurface.jpg',
                    title: 'Resurface',
                    w: 2700,
                    h: 3876
                },
                {
                    src: 'images/cityscape/cityscape.jpg',
                    title: 'Cityscape',
                    w: 3600,
                    h: 1980
                },
                {
                    src: 'images/agency/agency.jpg',
                    title: 'Agency',
                    w: 3850,
                    h: 2382
                },
                {
                    src: 'images/interior/interior_room.jpg',
                    title: 'Interior Futuristic',
                    w: 5600,
                    h: 3500
                },
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
                    title: 'Sketch 1/8',
                    w: 600,
                    h: 600
                },
                {
                    src: 'images/sketches/doggy.jpg',
                    title: 'Sketch 2/8',
                    w: 600,
                    h: 480
                },
                {
                    src: 'images/sketches/sailor_moon.png',
                    title: 'Sketch 3/8',
                    w: 600,
                    h: 600
                },
                {
                    src: 'images/sketches/summer_2013.jpg',
                    title: 'Sketch 4/8',
                    w: 640,
                    h: 640
                },
                {
                    src: 'images/sketches/helmets.jpg',
                    title: 'Sketch 5/8',
                    w: 4000,
                    h: 3121
                },
                {
                    src: 'images/sketches/city_sketch.jpg',
                    title: 'Sketch 6/8',
                    w: 3300,
                    h: 1816
                },
                {
                    src: 'images/sketches/agency_sketch.jpg',
                    title: 'Sketch 7/8',
                    w: 3850,
                    h: 2382
                },
                {
                    src: 'images/sketches/interior_sketch.jpg',
                    title: 'Sketch 8/8',
                    w: 3300,
                    h: 2063
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