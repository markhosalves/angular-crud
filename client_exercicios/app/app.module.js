angular.module(
    'cadpat', []
).controller(
    'ListagemController', ['$scope',
        function ($scope) {
            $scope.foto = {
                url: 'http://bit.ly/imgbacen'
            };
        }
    ]
    );
