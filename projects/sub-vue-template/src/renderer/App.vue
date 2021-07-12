<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    AHome: () => import('./views/Home.vue'),
  },
  data() {
    return {}
  },
  computed: mapState({
    val: state => state.val,
    flag: state => state.flag,
  }),
  mounted() {
    // this.$store.commit('change', '2')
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &:hover {
      color: #2c3e50;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
