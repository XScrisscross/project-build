import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import loadable from '@loadable/component'
import { Spin } from 'antd'
import WithRouter from '~contain/WithRouter'
import RoutingGuard from '~contain/RoutingGuard'
import AsyncComponent from '~contain/AsyncComponent'

const files = require.context('./', true, /(^\.\/index\-module\-)([a-zA-Z\/]+)\.js$/)

export default ((files) => {
  return class RouterWraper extends React.Component {
    state = {
      routes: this.mergeRoute(files),
    }

    // 合并 route
    mergeRoute (files, routes = []) {
      routes = files.keys().reduce((res, k) => {
        return files(k).default ? res.concat(files(k).default) : res
      }, [])
      return this.valiRoutesParams(routes)
    }

    // 校验 route 参数
    valiRoutesParams (routes) {
      let valires = routes.every((route) => {
        return Object.prototype.toString.call(route) === '[object Object]' && route.name && route.component
      })
      if (valires) {
        return routes
      }
      return []
    }

    // 懒加载
    loadWraper (component) {
      return Utils_Array.compose(AsyncComponent, WithRouter, RoutingGuard)(component)
      // return loadable(comp, {
      //   fallback: <Spin tip="Loading..."> </Spin>,
      // })
    }

    render () {
      return (
        <Switch>
          {this.state.routes.map((item, index) => {
            return <Route exact path={`/app/${item.name}`} component={this.loadWraper(item.component)} key={index} />
          })}
        </Switch>
      )
    }
  }
})(files)
