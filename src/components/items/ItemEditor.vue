<template>
    <div class="item">
        <ModalEditor :title="itemStr">
            <form action="" @submit="submit" id="itemForm">
                <div class="field">
                    <label class="label">{{ label_itemName }}</label>
                    <div class="control">
                        <input v-model="item.hint" :placeholder="label_itemName" class="input">
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">{{ label_submit }}</button>
                    </div>
                </div>
            </form>

        </ModalEditor>
    </div>
</template>

<script>
    import ModalEditor from '@/components/ModalEditor.vue'

    export default {
        name: "ItemEditor",
        props: {
            itemId: {
                type: Number,
                default: null,
                required: false,
                validator: function (value) {
                    return value > 0
                }
            },
        },
        data: function () {
            return {
                label_itemName: 'Наименование',
                label_submit: 'Сохранить',
                item: this.ItemModel()
            }
        },
        components: {
            ModalEditor
        },
        computed: {
            itemStr: function () {
                return "Услуга (товар) #" + String(this.itemId);
                //return '';
            },

        },

        methods: {
            ItemModel: function() {
                let model = {
                    id: null,
                    hint: null
                };
                console.log(this.$store.state.config.apiHost);
                if (this.itemId != null) {

                    //this.$http.get('/')
                }
                return model;
            },
            submit: function (e) {
                e.preventDefault();
                //console.log(this.itemId.validator());
                console.log(JSON.stringify(this.item));
            }
        }
    }
</script>

<style scoped>

</style>