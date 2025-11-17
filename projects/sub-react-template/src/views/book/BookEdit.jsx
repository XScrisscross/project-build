import React from 'react'
import { Modal, Input, Form, Select } from 'antd'
import MDEditor from '@uiw/react-md-editor'
import { saveAs } from 'file-saver'
import config from '../../env/config'

import './BookEdit.scss'

const bookForm = React.createRef()
export default class BookEdit extends React.Component {
  state = {
    // blog
    blog: '',
    blogName: '',
    blogType: config.blogType,

    // form
    validateMessages: {
      required: '${label} 不可为空!',
    },
  }

  valueChangeHandle = (blog) => {
    this.setState({
      blog: blog,
    })
  }

  fileSaveHandle = async () => {
    const { validateFields } = bookForm.current
    try {
      const { chapterName, RelaType } = await validateFields()
      const blogName = `${+new Date()}-${RelaType}-${chapterName}.md`
      const blob = new Blob([this.state.blog], { type: 'text/plain;charset=utf-8' })
      saveAs(blob, blogName)
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
    }
  }

  render() {
    return (
      <>
        <Modal className={'book-edit-style'} title={'文章编辑'} width={'70%'} visible={this.props.visible} okText={'生成MD文档'} cancelText={'取消'} onOk={this.fileSaveHandle} onCancel={() => this.props.onCancel()}>
          <Form ref={bookForm} className={'mb20'} layout={'inline'} initialValues={{ remember: false }} validateMessages={this.state.validateMessages}>
            <Form.Item style={{ width: 250 }} name="chapterName" label="标题" rules={[{ required: true }]}>
              <Input allowClear />
            </Form.Item>
            <Form.Item style={{ width: 250 }} name="RelaType" label="类型" rules={[{ required: true }]}>
              <Select placeholder="选择文章类型" allowClear>
                {this.state.blogType.map((item, index) => (
                  <Select.Option value={item.type} key={index}>
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
          <MDEditor height={500} className="md-editor" value={this.state.value} onChange={this.valueChangeHandle} />
        </Modal>
      </>
    )
  }
}
