import './public-path'
import * as serviceWorker from './serviceWorker'
// react
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// mount-window
import '~apis'
import '~utils'
import '~env'

// main
import App from '~views'
import store from '~redux'

// gloable-css
import 'normalize.css/normalize.css'
import 'antd/dist/antd.less'
import '~assets/css/app.scss'

function RootApp() {
  return (
    <Provider store={store}>
      <Router basename={window.__POWERED_BY_QIANKUN__ ? '/sub-react-template' : '/'}>
        <Switch>
          <Route path='/app'>
            <App />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

function render(props) {
  const { container } = props
  ReactDOM.render(<RootApp />, container ? container.querySelector('#root') : document.querySelector('#root'))
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped')
}

export async function mount(props) {
  console.log('[react16] props from main framework', props)
  render(props)
}

export async function unmount(props) {
  const { container } = props
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'))
}

serviceWorker.unregister()
