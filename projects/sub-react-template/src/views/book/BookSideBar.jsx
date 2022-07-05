import React from 'react'
import { withRouter } from 'react-router-dom'
import { PlusCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons'

import BookEdit from './BookEdit'

import './BookSideBar.scss'

class BookSideBar extends React.Component {
  state = {
    isModalVisible: false,
  }

  showModal = () => {
    this.setState({
      isModalVisible: true,
    })
  }

  cancelEdit = () => {
    this.setState({
      isModalVisible: false,
    })
  }

  render() {
    return (
      <>
        <div className="book-sidebar">
          <div className="chapter-title shadow">
            <PlusCircleOutlined className="icon mr10" onClick={this.showModal} />
          </div>
          <div className="book-index-list shadow">
            {this.props.booksInfo.map((item, index) => {
              return (
                <div className={item.active ? 'chapter-item active' : 'chapter-item'} key={item.typeRela + item.chapterId} onClick={() => this.props.fileChangeAction(item)}>
                  <div className="chapter-name">
                    {index === 0 ? '' : `${index} . `} {item.chapterName}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <BookEdit visible={this.state.isModalVisible} onCancel={this.cancelEdit} />
      </>
    )
  }
}

export default withRouter(BookSideBar)
