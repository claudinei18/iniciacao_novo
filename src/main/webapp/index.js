/**
 * Created by anderson on 28/09/15.
 */
'use strict';

angular.module('controller', ['ngProgress', 'ui.bootstrap'])

    .controller('SearchCtrl', function ($scope, $rootScope, $http, ngProgressFactory) {


        $scope.start = function () {
            $scope.progressbar = ngProgressFactory.createInstance();

            $scope.progressbar.setColor('#0073c4');
            $scope.progressbar.setHeight('6px');
            $scope.progressbar.start();
            $scope.currentPage = 1;
        }

        $scope.listMostrar = [];
        $scope.itemsPerPage = 10;
        $scope.currentPage = 1;

        $scope.images = [];

        $scope.searched = false;

        $scope.searchMethod = function () {
            console.log("teste")
            $scope.start();


            $http.get('http://localhost:9300/_search?q=*' + $scope.search + '*&from=0&size=10000', {
                headers: {'Content-Type': 'application/json'}, crossDomain: true
            }).then(function (response) {
                // With the data succesfully returned, we can resolve promise and we can access it in controller
                // console.log(data)

                console.log("Response")
                console.log(response)

                $scope.entidades = response.data.hits.hits;
                console.log($scope.entidades)

                $scope.answer = response.data;
                $scope.totalItems = $scope.answer.length - 1;
                $scope.bigTotalItems = $scope.answer.length - 1;

                if(response.data.length == 1){
                    $scope.answer = []
                    $scope.listMostrar = []
                }


                // console.log($scope.teste)

                $scope.pageChanged();
            });


            $http.get('https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=' + $scope.search, {
                headers: {'Api-Key': '6q9uj3695ckk9m4u6cfxjz7e'}
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

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function() {
            console.log('Page changed to: ' + $scope.currentPage);
            for(var i = (($scope.currentPage - 1) * $scope.itemsPerPage) + 1, j = 0; i < ( $scope.currentPage - 1) * $scope.itemsPerPage + $scope.itemsPerPage && i < $scope.answer.length; i++, j++){
                $scope.listMostrar[j] = $scope.answer[i];
            }
            console.log($scope.listMostrar)
        };

        $scope.maxSize = 10;
        $scope.bigCurrentPage = 1;
    });