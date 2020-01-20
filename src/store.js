import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        modalEditor: false,
        currentCompany: 1,

        config: {
            apiHost: 'http://' + process.env.VUE_APP_API_SERVER + ':' + process.env.VUE_APP_API_PORT + '/' + process.env.VUE_APP_API_URL,
            // TODO: Change to logged in user company!
            defaultCompanyID: 1
        }
    },
    mutations: {
        hideModalEditor(state) {
            state.modalEditor = false;
        },
        showModalEditor(state) {
            state.modalEditor = true;
        },
        setDefaultCompany(state) {
            state.currentCompany = state.config.defaultCompanyID;
        },
        setCurrentCompany(state, companyId) {
            state.currentCompany = companyId;
        }
    },
    actions: {

    },
    getters: {
        companyID: state => {
            if (state.currentCompany) {
                return state.currentCompany;
            } else {
                return state.config.defaultCompanyID;
            }
        }
    }
})
