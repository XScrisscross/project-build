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
  //   // 360评估结果
  //   getAssessresult() {
  //     getAction("/ceo/assessResult", {
  //       type: this.barParams.type,
  //       year: this.barParams.year,
  //       deptcode: this.barParams.depnum,
  //     }).then((res) => {
  //       console.log(res, "360评估结果")
  //       if (res.year.length == 0) {
  //         this.echartsDatasAEmpty = true;
  //       } else {
  //         this.echartsDatasAEmpty = false;
  //         try {
  //           this.echartsDatasA = getEchartsDatasFunc.echartsDatasA({ ...res });
  //         } catch (error) {
  //           this.$message.error(error);
  //         }
  //       }
  //     });
  //   },
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
