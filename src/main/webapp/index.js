/**
 * Created by anderson on 28/09/15.
 */
'use strict';

angular.module('controller', ['ngProgress'])

    .controller('SearchCtrl', function ($scope, $rootScope, $http, ngProgressFactory) {


        $scope.start = function () {
            $scope.progressbar = ngProgressFactory.createInstance();

            $scope.progressbar.setColor('#0073c4');
            $scope.progressbar.setHeight('6px');
            $scope.progressbar.start();
        }

        $scope.images = [];

        $scope.searched = false;

        $scope.searchMethod = function () {
            console.log("teste")
            $scope.start();

            $http.post('/rest/search', {
                search: $scope.search,
                ajax: true
            }, {
                transformRequest: function (data) {
                    return $.param(data);
                },
                headers: {'Content-Type': 'text/plain;',
                    'Accept': 'text/plain'}
            }).then(function (response) {
                console.log(response)
                $scope.answer = response.data;
            });

            $http.get('https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=' + $scope.search, {
                headers: {'Api-Key': 'acjxx6sctv2xa3ud2g4p9x6u'}
            }).then(function (response) {
                console.log(response)
                console.log(response.data.images[1].display_sizes[0].uri)

                $scope.images = response.data.images
                $scope.imagem = response.data.images[1].display_sizes[0].uri
            });

            $scope.end();
            $scope.searched = true;

        };

        $scope.sendEmail = function () {
            console.log("teste")
            console.log($scope.nome)
            console.log($scope.email)

            //window.open('mailto:test@example.com?subject=subject&body=body');
        }

        $scope.teste = function () {
            console.log("testessss")
        }

        $scope.end = function () {
            $scope.progressbar.complete();
        }

        angular.element(document).ready(function () {
            $scope.progressbar.complete();
        });
    });