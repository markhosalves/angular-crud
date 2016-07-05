namespace cadpat.bem {
    'use strict';

    export interface IBem {
        _id: string;
        urlFoto: string;
        descricao: string;
    }

    interface IRouteParamsServiceBem extends ng.route.IRouteParamsService {
        id: string;
    }


    class AlterarController {
        static $inject: Array<string> = ['$http', '$location', '$routeParams', '$window'];
        bem: IBem;

        constructor(private $http: ng.IHttpService,
            private $location: ng.ILocationService,
            private $routeParams: IRouteParamsServiceBem,
            private $window: ng.IWindowService) {
            $http.get(`/api/v1/bens/${$routeParams.id}`)
                .success((response: IBem) => {
                    this.bem = response;
                })
                .error((message) => {
                    this.$window.alert(message);
                });
        }

        ////////////////

        salvar() {
            this.$http.put(`/api/v1/bens/${this.bem._id}`, this.bem)
                .success((response) => {
                    this.$window.alert('Bem alterado com sucesso');
                    this.$location.path('/bens');
                })
                .error((message) => {
                    this.$window.alert(message);
                });
        }
    }

    class IncluirController {
        static $inject: Array<string> = ['$http', '$location', '$window'];
        bem: IBem;

        constructor(private $http: ng.IHttpService,
            private $location: ng.ILocationService,
            private $window: ng.IWindowService) {
        }

        ////////////////

        salvar() {
            this.$http.post('/api/v1/bens', this.bem)
                .success((response) => {
                    this.$window.alert('Bem incluído com sucesso');
                    this.$location.path('/bens');
                })
                .error((message) => {
                    this.$window.alert(message);
                });
        }
    }


    class DetalheController {
        static $inject: Array<string> = ['$http', '$routeParams', '$window'];
        bem: IBem;
        textoCabecalho: string;
        ////////////////

        constructor(private $http: ng.IHttpService,
            private $routeParams: IRouteParamsServiceBem, private $window: ng.IWindowService) {
            $http.get(`/api/v1/bens/${$routeParams.id}`)
                .success((response: IBem) => {
                    this.bem = response;
                    this.textoCabecalho = `Detalhamento do Bem : ${this.bem._id}`;
                })
                .error((message) => {
                    this.$window.alert(message);
                });
        }
    }






    export class ListagemController {
        static $inject: Array<string> = ['$http', '$window'];
        bens: IBem[];
        nomePessoa: string;
        constructor(private $http: ng.IHttpService, private $window: ng.IWindowService) {
            this.listar();
        }

        //////////

        listar() {
            this.$http.get('/api/v1/bens/').success((response: IBem[]) => {
                this.bens = response;
                this.nomePessoa = 'Marcos Alves';
            }
            ).error((message) => {
                this.$window.alert(message);
            }

                );
        }

        excluir(id: string) {
            if (!this.$window.confirm(`confirma a exclusao dp bem id: ${id} ?`)) {
                return;
            }
            this.$http.delete(`/api/v1/bens/${id}`).success(
                (response) => {
                    this.$window.alert('Bem excluído com sucesso!');
                    this.listar();
                }
            ).error((message) => {
                this.$window.alert(message);
            }

                );
        }


    }

    angular
        .module('bemControllers', [])
        .controller('ListagemController', ListagemController)
        .controller('DetalheController', DetalheController)
        .controller('IncluirController', IncluirController)
        .controller('AlterarController', AlterarController);
}
