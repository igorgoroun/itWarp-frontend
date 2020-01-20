<template>
    <div class="items">
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Товары и услуги
                    </h1>
                    <div class="columns">
                        <div class="column is-three-quarters"></div>
                        <div class="column is-one-quarter">
                            <div class="buttons is-right">
                                <button class="button is-small is-dark" v-on:click="edit">
                                    <font-awesome-icon icon="plus"/>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <ItemEditor itemid=0 />
    </div>
</template>

<script>
    import ItemEditor from '@/components/items/ItemEditor.vue'

    export default {
        name: "Items",
        props: {
            itemId: Number,
        },
        components: {
            ItemEditor,
        },
        methods: {
            edit: function () {
                this.$store.commit('showModalEditor');
            }
        }
    }
</script>

<style scoped>

</style>