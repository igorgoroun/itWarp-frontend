<template>
    <div id="app">
        <TopMenu/>

        <router-view/>
    </div>
</template>

<script>
    import TopMenu from "./components/layout/TopMenu";

    export default {
        name: 'App',
        components: {
            TopMenu,
        }
    }
</script>

<style>
    body {
        margin-top: 20px;
    }
</style>
