import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Code from '../../cpts/contain/CodeBlockHighLight'

import './PageMain.scss'
export default class PageMain extends React.Component {
  render() {
    const Component = this.props.bookInfo.chapterContent.default
    return (
      <div className="page-main-wraper">
        <Code>
          <Component />
        </Code>
      </div>
    )
  }
}
