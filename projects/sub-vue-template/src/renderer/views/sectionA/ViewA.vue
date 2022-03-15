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
import E from '{}';

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
      let uuid2 = Math.ceil(Math.random() * 100000); //递增索引
      let fileName = e.target.files[0].name;
      let fileType = e.target.files[0].name.split('.')[1];
      let fileSize = this.renderSize(e.target.files[0].size);
      let dataImg = null;
      if (fileType === 'xlsx' || fileType === 'xls') {
        dataImg = require('../../assets/message/表格.png');
      } else if (fileType === 'doc' || fileType === 'docx') {
        dataImg = require('../../assets/message/文档.png');
      } else if (fileType === 'pptx' || fileType === 'ppt') {
        dataImg = require('../../assets/message/ppt.png');
      } else if (fileType === 'txt') {
        dataImg = require('../../assets/message/txt.png');
      } else if (fileType === 'pdf') {
        dataImg = require('../../assets/message/pdf.png');
      } else if (fileType === 'rar' || fileType === 'zip') {
        dataImg = require('../../assets/message/压缩包.png');
      } else {
        dataImg = require('../../assets/message/通用.png');
      }

      this.editor.txt.append(
        `<div style="max-width: 100%" contenteditable="false" class="uuid-${uuid2}"><div  class="fileBox" style="  width: 236px;   height: 70px; background: #ffffff; border-radius:3px;  border: 1px solid #eeeeee; display: flex; " > <div class="fileBoxExt"style=" width: 40px; height: 40px;  margin:10px; "> <img src=${dataImg} alt="" /> </div> <div class="fileBoxContent" style="width: 146px; display: flex; flex-direction: column; justify-content: center; " ><div class="fileBoxContentEM"style="overflow: hidden; text-overflow: ellipsis;white-space: nowrap;font-weight: 400;color: #000000;line-height: 16px;font-size: 12px; "> ${fileName}</div><div class="fileBoxContentEMsize"style="font-weight: 400; color: #999999; line-height: 18px; font-size: 12px" > ${fileSize}</div></div></div></div><div><span>&nbsp;</span></div> `
      );
      this.fileData.push({ key: 'uuid-' + uuid2, data: e.target.files[0] });

      e.target.value = ''; //清空value 可以二次发送同一文件
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
@import '../../assets/style/index.scss';

.text {
  text-align: left;
}
</style> 