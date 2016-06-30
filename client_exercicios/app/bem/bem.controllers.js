
(function (angular, undefined) {
    'use strict';

    angular
        .module('bemControllers', [])
        .controller('ListagemController', ListagemController);

    ListagemController.$inject = [];
    function ListagemController($http, $window) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            var promise = $http.get('/api/v1/bens');
            promise.then(function (response) {
                vm.bens = response.data;
            }
            ).catch(function (erro) {
                $window.alert(erro);
            }

                );

            // vm.bens = [{
            //     description: 'Prédio do Banco Central do Brasil - BACEN',
            //     url: 'http://bit.ly/imgbacen'
            // },
            //     {
            //         description: 'Câmara Legislativa DF',
            //         url: 'http://bit.ly/imgcamara'
            //     },
            //     {
            //         description: 'Congresso Nacional',
            //         url: 'http://bit.ly/imgcongresso'
            //     }];

        }
    }
})(angular);

