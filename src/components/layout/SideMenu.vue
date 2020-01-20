<template>
    <aside class="menu">
        <p class="menu-label">
            General
        </p>
        <ul class="menu-list">
            <li><a>Dashboard</a></li>
            <li><a>Customers</a></li>
        </ul>
        <p class="menu-label">
            Administration
        </p>
        <ul class="menu-list">
            <li><a>Team Settings</a></li>
            <li>
                <a class="is-active">Manage Your Team</a>
                <ul>
                    <li><a>Members</a></li>
                    <li><a>Plugins</a></li>
                    <li><a>Add a member</a></li>
                </ul>
            </li>
            <li><a>Invitations</a></li>
            <li><a>Cloud Storage Environment Settings</a></li>
            <li><a>Authentication</a></li>
        </ul>
        <p class="menu-label">
            DEVELOPMENT
        </p>
        <ul class="menu-list">
            <li><router-link to="/">Home <span class="sr-only">(current)</span></router-link></li>
            <li><router-link to="/about" class="nav-link">About</router-link></li>
            <li><router-link to="/company" class="nav-link">Company</router-link></li>
            <li><router-link to="/logout" class="nav-link">Logout</router-link></li>
        </ul>
    </aside>

</template>

<script>
    export default {
        name: 'SideMenu'
    }
</script>

<style>
    #navbarNav a.router-link-exact-active {
        color: #000000;
    }
</style>