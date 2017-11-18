import angular from 'angular';
import { UiModule } from '../ui.module';

export const ModalsService = angular
    .module(UiModule.name)
    .factory('ModalsService', ['$log', function ($log) {
        let modals = [];

        let api = {

            register: function (modal) {
                if (modal !== undefined) {
                    modals.push(modal);
                    return modal;
                }
            },

            getById: function (id) {
                if (id !== undefined && id !== '') {
                    const found = (item, index, modals) => item.id === id;
                    return modals.find(found);
                }
            }
        };

        return api;
    }]);