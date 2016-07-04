
(function (angular, undefined) {
    'use strict';

    angular
        .module('bemControllers', [])
        .controller('ListagemController', ListagemController)
        .controller('DetalheController', DetalheController)
        .controller('AlterarController', AlterarController)
        .controller('IncluirController', IncluirController);

    ListagemController.$inject = ['$http', '$window'];
    function ListagemController($http, $window) {
        var vm = this;
        vm.excluir = excluir;
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
        }

        function excluir(id) {
            if (!$window.confirm('Confirma a exclusão do bem id: ' + id + '?')) {
                return;
            }

            $http.delete('/api/v1/bens/' + id)
                .success(function (response) {
                    $window.alert('Bem excluído com sucesso!');
                    activate();
                }
                ).catch(function (erro) {
                    $window.alert(erro);
                }

                );
        }

    }

    AlterarController.$inject = ['$http', '$location', '$routeParams', '$window'];
    function AlterarController($http, $location, $routeParams, $window) {
        var vm = this;
        vm.salvar = salvar;
        activate();

        ////////////////

        function activate() {
            $http.get('/api/v1/bens/' + $routeParams.id).
                success(function (response) {
                    vm.bem = response;
                }
                ).catch(function (erro) {
                    $window.alert(erro);
                }

                );
        }

        function salvar() {
            $http.put('/api/v1/bens/' + vm.bem._id, vm.bem)
                .success(function (reponse) {
                    $window.alert('Bem alterado com sucesso');
                    $location.path('/bens');
                }

                );
        }
    }

    DetalheController.$inject = ['$http', '$routeParams', '$window'];
    function DetalheController($http, $routeParams, $window) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            $http.get('/api/v1/bens/' + $routeParams.id)
                .success(
                function (response) {
                    console.log(response);
                    vm.bem = response;
                }).error(function (message) {
                    $window.alert(message);
                }).catch(function (erro) {
                    $window.alert(erro);
                });
        }
    }

    IncluirController.$inject = ['$http', '$location', '$window'];
    function IncluirController($http, $location, $window) {
        var vm = this;
        vm.bem = {};
        vm.salvar = salvar;

        ////////////////

        function salvar() {
            $http.post('/api/v1/bens/', vm.bem)
                .success(
                function (response) {
                    $window.alert('Bem incluido com sucesso');
                    $location.path('message');
                }).error(function (message) {
                    $window.alert(message);
                }).catch(function (erro) {
                    $window.alert(erro);
                });
        }
    }



})(angular);

