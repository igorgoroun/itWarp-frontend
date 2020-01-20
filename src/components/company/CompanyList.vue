<template>
    <div class="company_list">
        <div class="columns is-multiline">
            <div v-for="company in companies" v-bind:key="company.id" class="column is-one-third">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            {{ company.fop_name_short }}
                        </p>
                        <a href="#" class="card-header-icon" aria-label="more options">
                          <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                          </span>
                        </a>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <address>
                                {{ company.address }}<br>
                                {{ company.itn }}<br>
                            </address>

                        </div>
                    </div>
                    <footer class="card-footer">
                        <a v-on:click="editCompany(company.id)" class="card-footer-item">Edit</a>
                        <span v-if="isActiveCompany(company.id)" class="card-footer-item has-background-success has-text-white">Active</span>
                        <a v-else v-on:click="activateCompany(company.id)" class="card-footer-item is-bold">Activate</a>
                    </footer>
                </div>
            </div>
        </div>
        <CompanyProfile :itemId=itemId />
    </div>
</template>

<script>
    import Company from '@/components/company/CompanyModel'
    import CompanyProfile from '@/components/company/CompanyProfile.vue'

    export default {
        name: "CompanyList",
        components: {
            CompanyProfile
        },
        /*props: {
            itemId: Number
        },
        */
        data() {
            return {
                itemId: null,
                companies: []
            };
        },
        mounted() {
            let list = [];
            this.$api.get('company/').then(function (response) {
                response.data.results.forEach(function (item) {
                    let cmp = new Company(item);
                    list.push(cmp);
                });
            });
            this.companies = list
        },
        computed: {

        },
        methods: {
            isActiveCompany: function (id) {
                return id === this.$store.getters.companyID;
            },
            activateCompany: function (id) {
                this.$store.commit('setCurrentCompany', id);

            },
            editCompany: function (id) {
                this.activateCompany(id);
                this.$emit('itemId', id);
                this.$store.commit('showModalEditor');
            }
        }
    }
</script>

<style scoped>

</style>