import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export const HtmltoPdf = (id, title, isOne) => {
  let element = document.getElementById(id)
  let contentWidth = element.clientWidth
  let contentHeight = element.clientHeight

  // 系统型缩放策略
  // 常见倍率
  let strategy = [1.25, 1.5]
  // 常见分辨率
  let dp = [1920, 1680, 1600, 1440]
  let curb = 1
  // 系统缩放bug 适配
  let availWidth = window.screen.availWidth
  let dpstr = dp.join('-')

  for (let i = 0; i < strategy.length; i++) {
    if (dpstr.indexOf(String(strategy[i] * availWidth)) !== -1) {
      curb = strategy[i]
    }
  }

  contentWidth = contentWidth * curb
  contentHeight = contentHeight * curb

  let canvas = document.createElement('canvas')
  let scale = 2 // 解决清晰度问题，先放大 2倍

  canvas.width = contentWidth * scale
  canvas.height = contentHeight * scale

  let agent = navigator.userAgent.toLowerCase()
  let isMac = /macintosh|mac os x/i.test(navigator.userAgent)

  let width = document.getElementsByTagName('body')

  if (!isMac) {
    canvas.getContext('2d').scale(scale, scale)
  }

  let options = {
    canvas: canvas,
    width: contentWidth * scale,
    height: contentHeight * scale,
    allowTaint: true, // 针对url链接图片
  }

  return new Promise((resolve, reject) => {
    return html2canvas(element, options)
      .then(canvas => {
        let pdf
        let pageData = canvas.toDataURL('image/jpeg', 1.0)

        if (isOne) {
          // jspdf.js 插件对单页面的最大宽高限制 为 14400
          let limit = 14400

          if (contentHeight > limit) {
            let contentScale = limit / contentHeight
            contentHeight = limit
            contentWidth = contentScale * contentWidth
          }

          let orientation = 'p'
          // 在 jspdf 源码里，如果是 orientation = 'p' 且 width > height 时， 会把 width 和 height 值交换，
          // 类似于 把 orientation 的值修改为 'l' , 反之亦同。
          if (contentWidth > contentHeight) {
            orientation = 'l'
          }

          // orientation Possible values are "portrait" or "landscape" (or shortcuts "p" or "l")
          pdf = new jsPDF(orientation, 'pt', [contentWidth, contentHeight]) // 下载尺寸 a4 纸 比例

          // pdf.addImage(pageData, 'JPEG', 左，上，宽度，高度)设置
          pdf.addImage(pageData, 'JPEG', 0, 0, contentWidth, contentHeight)
        } else {
          //一页 pdf 显示 html 页面生成的 canvas高度
          let pageHeight = (contentWidth / 552.28) * 841.89
          //未生成 pdf 的 html页面高度
          let leftHeight = contentHeight
          //页面偏移
          let position = 0
          //a4纸的尺寸[595.28,841.89]，html 页面生成的 canvas 在pdf中图片的宽高
          let imgWidth = 555.28
          let imgHeight = (imgWidth / contentWidth) * contentHeight

          pdf = new jsPDF('', 'pt', 'a4') // 下载尺寸 a4 纸 比例
          //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
          //当内容未超过pdf一页显示的范围，无需分页
          if (leftHeight < pageHeight) {
            pdf.addImage(pageData, 'JPEG', 20, 0, imgWidth, imgHeight)
          } else {
            while (leftHeight > 0) {
              pdf.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight)
              leftHeight -= pageHeight
              position -= 841.89
              //避免添加空白页
              if (leftHeight > 0) {
                pdf.addPage()
              }
            }
          }
        }

        pdf.save(`${title}.pdf`)
        resolve({ success: true })
      })
      .catch(err => {
        reject({ success: false })
      })
  })
}
