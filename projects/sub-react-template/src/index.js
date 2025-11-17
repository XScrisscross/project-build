// import './public-path'
// import * as serviceWorker from './serviceWorker'
// react
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// mount-window
import './apis/index.js';
import './env/index.js';

// main
import App from './views/index.jsx';
import store from './redux/index.js';

// gloable-css
import 'normalize.css/normalize.css';
import 'antd/dist/antd.less';
import './assets/css/app.scss';

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
  );
}

ReactDOM.render(<RootApp />, document.querySelector('#root'));
