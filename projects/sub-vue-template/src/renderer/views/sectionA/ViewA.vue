<template>
  <div class="container-editor">
    <h3>editor 文本即时通讯测试</h3>
    <div id="toolbar-container" class="toolbar" style="display: none"></div>
    <p>------ 我是分割线 ------{{file}}</p>
    <div>
      <!-- <label for="img" class="mr50">选择图片</label> -->
      <!-- <label for="file">选择文件</label> -->
      <input id="img" type="file" @change="sendImage" />
      <input id="file" type="file" @change="sendFile" />
      <span @click="sendMessage">依顺序发送当前信息</span>
    </div>
    <div class="border">
      <div id="text-container" class="text" @input="inputChange"></div>
    </div>
  </div>
</template>

<script>
// import E from '{}';

export default {
  mixins: [],

  directives: {},

  name: 'Editor',

  componentName: 'Editor',

  inject: [],

  props: {},

  data() {
    return {
      editor: null,
      reader: null,

      imgData: [],
      fileData: [],

      index: 0,
    };
  },

  computed: {},

  watch: {},

  methods: {
    inputChange(e) {
      console.log(e);
    },

    renderSize(fileSize) {
      var temp;
      if (fileSize < 1024) {
        return fileSize + 'B';
      } else if (fileSize < 1024 * 1024) {
        temp = fileSize / 1024;
        temp = temp.toFixed(2);
        return temp + 'KB';
      } else if (fileSize < 1024 * 1024 * 1024) {
        temp = fileSize / (1024 * 1024);
        temp = temp.toFixed(2);
        return temp + 'MB';
      } else {
        temp = fileSize / (1024 * 1024 * 1024);
        temp = temp.toFixed(2);
        return temp + 'GB';
      }
    },
    sendFile(e) {
    },

    sendMessage() {
      console.log(1);
    },

    updateEditorView(file) {
      const { type, data } = file;

      console.log(data);

      if (type === 'img') {
        this.editor.txt.append(`<div><img src=${data} style="max-width: 200px;height:100%"/></div>`);

        index++;
        this.fileData.push();
      }
    },

    initInstance() {
      this.reader = new FileReader();

      //创建监听
      this.reader.onload = function (e) {
        console.log(1);
        this.updateEditorView({ type: 'img', data: e.target.result });
      };
    },
  },

  created() {
    this.initInstance();
  },  

  mounted() {
    const editor = new E('#toolbar-container', '#text-container'); // 传入两个元素
    editor.create();

    this.editor = editor;
  },

  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
@import '../../_assets/style/index.scss';

.text {
  text-align: left;
}
</style> 