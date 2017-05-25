import React from 'react';
import '../styles/App.css';

// react router 
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// component-containers
import Home from '../containers/HomeContainer';
import Form from '../containers/FormContainer';
import List from '../containers/ListContainer';

const App = () => (
  <Router>
    <main className="Application">
      <div className="nav-bar-container">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/form">Submit Data</Link></div>
        <div><Link to="/cats">View Data</Link></div>
      </div>

      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
      <Route path="/cats" component={List} />
    </main>
  </Router >
)

export default App;
