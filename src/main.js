import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import VueLogger from 'vuejs-logger';
import 'bulma';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSignOutAlt, faCog, faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faSignOutAlt, faCog, faPlus);

//const isProduction = process.env.NODE_ENV === 'production';
const options = {
    isEnabled: true,
    //logLevel : isProduction ? 'error' : 'debug',
    logLevel: 'debug',
    stringifyArguments : false,
    showLogLevel : true,
    showMethodName : true,
    separator: '|',
    showConsoleColors: true
};
Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueResource);
Vue.use(VueLogger, options);

Vue.use({
    install (Vue) {
        Vue.prototype.$api = axios.create({
            baseURL: store.state.config.apiHost,
        })
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
