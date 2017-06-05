/**
 * Created by anderson on 28/09/15.
 */
'use strict';

angular.module('controller', ['ngProgress'])

    .controller('SearchCtrl', function ($scope, $rootScope, $http, ngProgressFactory) {
        $scope.progressbar = ngProgressFactory.createInstance();

        $scope.progressbar.setColor('#3340f7');
        $scope.progressbar.start();

        $scope.searchMethod = function () {
            console.log("teste")
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
                var x = response.data;
                var y = JSON.stringify(x)
                console.log(y)
            });

        };
    });