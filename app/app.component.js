import template from './app.component.html';
import './app.component.less';

const AppComponent = {
    template: template,
    controller: ['$log', '$http', ($log, $http) => {
        $log.log('AppComponent');

        $http.post('/messages.json');
    }]
};

export default AppComponent;

