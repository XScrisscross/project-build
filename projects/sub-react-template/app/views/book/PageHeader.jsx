import React from 'react'

import './PageHeader.scss'

export default function PageHeader(props) {
  return (
    <div className="page-header-wraper">
      <div className="book-name">《 {props.bookInfo.chapterName} 》</div>
      <div className="book-author">- {props.bookInfo.typeName}</div>
    </div>
  )
}
