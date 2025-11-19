import React from 'react'
import { withRouter } from 'react-router-dom'

export default (Comp) =>
  withRouter(
    class extends React.Component {
      render() {
      const { history, location } = this.props
      // if (location.pathname === '/app/book') {
      //   return <Comp {...this.props} />
      // } else {
      //   return <Redirect to="/app/book" />
      // }
       console.log(this.props, '2')
       console.log(history, '3')
        return <Comp {...this.props}/>
      }
    }
  )
