<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$router, '$router');
  },
};
</script>
