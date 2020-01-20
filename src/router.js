import Vue from 'vue'
import Router from 'vue-router'
import Logout from './components/Logout.vue'
import Dashboard from "./views/Dashboard";
// company info
import Company from './views/Company.vue'
// main views
import Bank from './views/Bank.vue'
import Contracts from "./views/Contracts";
import Invoices from "./views/Invoices";
import CompletionActs from "./views/CompletionActs";
// directories
import Partners from "./views/Partners";
import Items from "./views/Items";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/bank',
            name: 'bank',
            component: Bank
        },
        {
            path: '/contracts',
            name: 'contracts',
            component: Contracts
        },
        {
            path: '/invoices',
            name: 'invoices',
            component: Invoices
        },
        {
            path: '/acts',
            name: 'acts',
            component: CompletionActs
        },
        {
            path: '/dir/partners',
            name: 'partners',
            component: Partners
        },
        {
            path: '/dir/items',
            name: 'items',
            component: Items
        },
        {
            path: '/company',
            name: 'company',
            component: Company
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout
        }
    ]
})
