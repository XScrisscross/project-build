import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default (Comp) =>
  class extends React.Component {
    render() {
      // const { history, location } = this.props
      // if (location.pathname === '/app/book') {
      //   return <Comp {...this.props} />
      // } else {
      //   return <Redirect to="/app/book" />
      // }
      return <Comp {...this.props} />
    }
  }
