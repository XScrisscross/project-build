<template>
  <div class="container-DemoView"></div>
</template>

<script>
// import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

// import DemoDialog from '../components/dialog-jdjx-dept-index/dialog.vue';

// import mixin from "../common/bar-mixin";

// import { getAction } from "../../api/manage.js";

export default {
  name: 'DemoView',

  components: {
    DemoDialog,
  },

  mixins: [],

  directives: {},

  inject: [],

  props: {},

  data() {
    return {
      teamVisible: true,
      pointVisible: false,
      assessVisible: false,
      tagVisible: false,
    };
  },

  computed: {
    // ...mapState({
    //   barParams: state => state.portrait.barParams,
    // }),
  },

  watch: {
    barParams() {
      console.log(this.barParams, 'barOption params 改变');
      this.changeHandle();
    },
  },

  // methods: {
  // },

  // created() {
  //   this.init();
  // },

  mounted() {},
};
</script>

<style lang="scss" scoped>
// @import url('./assets/_style/common.scss');
</style>
