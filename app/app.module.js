import angular from 'angular';
import router from 'angular-route';
import material from 'angular-material';
import 'angular-material/angular-material.min.css';
import './index.html';
import './assets/styles/app.css';
import AppComponent from './app.component';


angular.module('app', [router, material])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<app></app>',
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .component('app', AppComponent);