<template>
  <div class="home">
    <!-- <div style="cursor: pointer" @click="changeProtal">通信测试-Auther：{{ protalInfo.auther }}</div> -->
    <div>exchange-msg</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {
  },
  name: 'Home',
  computed: mapState({
    // protalInfo: state => state.protal.protalInfo,
  }),
  methods: {
    changeProtal() {
      // window.$setGlobalState({ ...this.protalInfo, auther: 'XScrisscross' });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
  margin: 40px;

  .test {
    width: 500px;
    height: 500px;
    background-color: aquamarine;
  }
}
</style>
