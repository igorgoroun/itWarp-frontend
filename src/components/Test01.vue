<template>
  <div class="cmpp">
    <h1>Mess: <span>{{ mess }}</span></h1>
    <h1>Rett: <span>{{ rett }}</span></h1>
    <button v-on:click="changeMess">switch</button>
  </div>
</template>

<script>
export default {
  name: 'Test01',
  props: {
    mess: String,
    rett: String
  },
  propsData: {
    mess: 'dsfsdf',
    rett: 'gfhghgfhf'
  },
  methods: {
    defaultMess: function() {
      //this.mess = "default_mess";
      //this.rett = "default_rett";
      return 'default_mess';
    },
    defaultRett: function() {
        return 'default_rett';
    },
    changeMess: function () {
      /*
      if (this.mess === process.env.VUE_APP_API_SERVER) {
        this.defaultMess();
      } else {
        this.mess = process.env.VUE_APP_API_SERVER;
      }
      process.env.VUE_APP_API_SERVER + ':' + process.env.VUE_APP_API_PORT

      this.$http.get('/company')
        .then(response => {
          this.$log.debug('Text log', response.body);
          this.mess = response.body.mess;
          //this.set = response.body;
          //this.assign(response.body);
        //}, response => {
          // error callback
        });
        */
       this.mess = "fuck mess";
       this.rett = 'fuck rettt';
    }
  }
}
</script>

<style scoped>
  .cmpp h1 span { color: aquamarine; }

</style>
