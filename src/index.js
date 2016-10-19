import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './container/Main/Main';
import App from './App';
import Contacts from './component/contacts/Contacts';
import About from './component/about/About';



ReactDOM.render(
      <Router history={browserHistory}>
          <Route path='/' component={App}>
              <IndexRoute component={Main} />
              <Route path='/about' component={About} />
              <Route path='/contacts' component={Contacts} />
          </Route>
      </Router>,
  document.getElementById('root')
);
