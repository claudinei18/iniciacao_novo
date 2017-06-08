/**
 * Created by anderson on 28/09/15.
 */
'use strict';

angular.module('controller', ['ngProgress'])

    .controller('SearchCtrl', function ($scope, $rootScope, $http, ngProgressFactory) {


        $scope.start = function () {
            $scope.progressbar = ngProgressFactory.createInstance();

            $scope.progressbar.setColor('#ea853c');
            $scope.progressbar.setHeight('6px');
            $scope.progressbar.start();
        }

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

            $scope.end();
            $scope.searched = true;

        };

        $scope.end = function () {
            $scope.progressbar.complete();
        }

        angular.element(document).ready(function () {
            $scope.progressbar.complete();
        });
    });