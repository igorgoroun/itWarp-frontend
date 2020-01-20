<template>
    <div class="modal" :class="{ 'is-active': visible }">
        <div class="modal-background" v-on:click="closeModal"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">{{ title }}</p>
                <button class="delete is-right _has-background-danger" v-on:click="closeModal" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <slot></slot>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ModalEditor",
        props: {
            title: String,
        },
        computed: {
            visible: function () {
                return this.$store.state.modalEditor;
            }
        },
        methods: {
            closeModal: function () {
                this.$store.commit('hideModalEditor');
            }

        }
    }
</script>

<style scoped>
    header.modal-card-head {
        /*border-top-left-radius: 0;
        border-top-right-radius: 0;*/
        border-bottom: 1px solid #eee;
        background-color: #fff;
        padding-bottom: 10px;
        padding-top: 10px;
    }
    section.modal-card-body {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }
</style>