import React from 'react'
import { withRouter } from 'react-router-dom'

export default (Comp) =>
  withRouter(
    class extends React.Component {
      render() {
        // console.log(this.props, 'WithRouter')
        return <Comp {...this.props} />
      }
    }
  )
