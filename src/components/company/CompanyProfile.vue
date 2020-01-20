<template>
    <div class="item">
        <ModalEditor :title="itemStr">
            <form action="" @submit="submit" id="itemForm">
                <div class="field is-horizontal">
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <input v-model="item.name_last" placeholder="Фамилия" class="input">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <input v-model="item.name_first" placeholder="Имя" class="input">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <input v-model="item.name_middle" placeholder="Отчество" class="input">
                            </div>
                        </div>
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
    import Company from '@/components/company/CompanyModel'

    export default {
        name: "CompanyProfile",
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
                let model = new Company();
                console.log(this.itemId);
                if (this.itemId != null) {
                    this.$api.get('company/' + this.itemId + '/').then(function (response) {

                        model = new Company(response.data);
                        //console.log(model);
                    });
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