<script>
export default {
  name: 'Logout',
  props: {},
  data: function () {
    location.replace("/accounts/logout");
  }
}
</script>

