import * as React from 'react';
import { FC } from 'react';
import ReactDOM from 'react-dom';
import './style.global.less';
import { Router, Route, BrowserRouter, HashRouter, Switch, Redirect } from 'react-router-dom';
import About from './page/about';
import User from './page/user';
import NoMatch from './page/404';
import { createBrowserHistory } from 'history';
import { ConfigProvider } from 'antd';
import mainLayout from './layout/mainLayout';
import { Provider } from 'react-redux';
import store from './store';

const history = createBrowserHistory();

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/main" component={mainLayout} />
      <Redirect to='/main' />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render((
  <Provider store={store}>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </Provider>
), document.getElementById('root'));
