import React from 'react'
import booksInfo from '../../books/index.js'

import PageHeader from './PageHeader'
import PageMain from './PageMain'
import PageFooter from './PageFooter'
import BookSideBar from './BookSideBar'

import './Book.scss'
export default class Book extends React.Component {
  state = {
    booksInfo: booksInfo,
    bookInfo: booksInfo[0],
  }

  tabFile = (item) => {
    const newBooksInfo = booksInfo.map((book) => {
      if (book.chapterId === item.chapterId) {
        return { ...book, active: true }
      }
      return { ...book, active: false }
    })

    this.setState({
      bookInfo: item,
      booksInfo: newBooksInfo,
    })
  }

  render() {
    return (
      <div className="book-wraper">
        <div className="book-content-wraper">
          <PageHeader bookInfo={this.state.bookInfo} />
          <PageMain bookInfo={this.state.bookInfo} />
          <PageFooter />
        </div>
        <BookSideBar booksInfo={this.state.booksInfo} fileChangeAction={this.tabFile} />
      </div>
    )
  }
}
