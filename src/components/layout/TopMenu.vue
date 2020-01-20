<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a role="button" v-on:click="toggleMobileMenu" class="navbar-burger burger" :class="{ 'is-active': mobileActive }" aria-label="menu" aria-expanded="false" data-target="itWarpNavbar">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="itWarpNavbar" class="navbar-menu" :class="{ 'is-active': mobileActive }">
            <div class="navbar-start">
                <router-link to="/bank" class="navbar-item">Банк</router-link>
                <router-link to="/contracts" class="navbar-item">Договора</router-link>
                <router-link to="/invoices" class="navbar-item">Счета</router-link>
                <router-link to="/acts" class="navbar-item">Акты</router-link>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Справочники
                    </a>

                    <div class="navbar-dropdown">
                        <router-link to="/dir/partners" class="navbar-item">Контрагенты</router-link>
                        <router-link to="/dir/items" class="navbar-item">Товары и услуги</router-link>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <router-link to="/about" class="navbar-item"><sub>it</sub>Warp</router-link>
                <router-link to="/company" class="navbar-item">
                    <span class="icon">
                        <font-awesome-icon icon="cog"/>
                    </span>
                </router-link>
                <router-link to="/logout" class="navbar-item">
                    <span class="icon">
                        <font-awesome-icon icon="sign-out-alt"/>
                    </span>
                    <span>Logout</span>
                </router-link>
            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        name: 'TopMenu',
        data: function() {
            return {
                mobileActive: false
            }
        },
        methods: {
            toggleMobileMenu: function () {
                this.mobileActive = !this.mobileActive;
            }
        }
    }


</script>

<style>
    #navbarNav a.router-link-exact-active {
        color: #000000;
    }
</style>