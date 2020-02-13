import React from 'react';
import logo from './logo.svg';
import './index.css';
import Home from './home';
import Register from './register';
import Login from './login';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
