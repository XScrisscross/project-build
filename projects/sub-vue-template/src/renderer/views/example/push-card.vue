<template>
  <div class="container">
    <div class="button" @click="clickHandle">推送</div>
    <div v-for="(item, index) in cardList" :key="index">
      <div :ref="'ref' + index" class="box" :class="{ active: active[index] }" @click="closeHandle($event, index)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  mixins: [],

  directives: {},

  name: 'push-card',

  componentName: 'push-card',

  inject: [],

  props: {},

  data() {
    return {
      active: [],
      isHide: [],

      // 任务队列
      trackStatus: false,
      promiseExceTimer: null,
      promiseQuene: [],
      waitQuene: [],
      i: 0,

      cardList: [],
      timerList: [],
    };
  },

  computed: {},

  watch: {},

  methods: {
    clickHandle() {
      this.active.push(false);

      let _this = this;
      let tempSum = this.i;
      this.cardList.push({ name: 'card' + this.i });

      this.creatQuenen(function () {
        _this.active[tempSum] = true;
        _this.timerList[tempSum] = setTimeout(() => {
          _this.$refs['ref' + tempSum][0].className = _this.$refs['ref' + tempSum][0].className + ' ' + 'hide';
          _this.timerList[tempSum] = null;
        }, 4000);
      });
      this.i++;
    },

    closeHandle(event, index) {
      console.log(this.$refs[index]);
      this.$refs['ref' + index][0].className = this.$refs['ref' + index][0].className + ' ' + 'hide';
    },

    //
    trackTask() {
      this.promiseQuene = [...this.promiseQuene, ...this.waitQuene];
      let tempCallback = this.promiseQuene.pop();
      tempCallback();
    },

    // 创建队列
    creatQuenen(callback) {
      // 存在出发任务定时器 加入等候队列
      let _this = this;
      if (_this.trackStatus) {
        _this.waitQuene.push(callback);
      } else {
        _this.promiseQuene.push(callback);
        if (_this.promiseExceTimer) {
          _this.promiseExceTimer = null;
        }
        _this.promiseExceTimer = setTimeout(() => {
          console.log(_this.promiseQuene, 'promiseQuene');
          console.log(_this.waitQuene, 'waitQuene');
          _this.trackStatus = true;
          _this.trackTask();
          if (_this.promiseQuene.length === 0) {
            _this.$forceUpdate();
          }
          _this.$nextTick(() => {
            _this.promiseExceTimer = null;
            _this.trackStatus = false;
          });
        }, 500);
      }
    },
  },

  created() {},

  mounted() {},

  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}

.button {
  height: 30px;
  line-height: 30px;
  width: 50px;
  background-color: #aaa;
  margin-bottom: 10px;
}

.box {
  transition: all 1s;
  position: relative;
  left: 300px;
  width: 200px;
  height: 200px;
  background-color: #aaa;
  margin-bottom: 10px;
}

.active {
  left: 0;
}

.hide {
  display: none;
}
</style>
