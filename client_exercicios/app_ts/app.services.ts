namespace cadpat {
    'use strict';

    interface IBemResource extends ng.resource.IResource<cadpat.bem.IBem> {
    }

    export interface IBemResourceClass extends
        ng.resource.IResourceClass<IBemResource> {

        update(params: Object,
            IBem: cadpat.bem.IBem,
            success: Function,
            error?: Function); //estava retornando um objeto: cadpat.bem.IBem; no nosso caso não retorna nada na msg
    }

    BemResource.$inject = ['$resource'];
    function BemResource($resource: ng.resource.IResourceService):
        IBemResourceClass {
        return <IBemResourceClass>$resource('/api/v1/bens/:id', null, {
            update: {
                method: 'PUT'
            }
        });
    }

    angular
        .module('cadpatServices', ['ngResource'])
        .factory('BemResource', BemResource);
}
