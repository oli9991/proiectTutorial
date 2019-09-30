import React from 'react';
import './Sources_CSS/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Sources_Js/Main';
import Login from './Sources_Js/Login';
import Register from './Sources_Js/Register';
import Dashboard from './Sources_Js/Dashboard';
import Favs from './Sources_Js/Favs';
import YourPosts from './Sources_Js/YourPosts';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      message: 'LOGIN',
      token: '',
    }
    this.logMein = this.logMein.bind(this);
    this.logMeout = this.logMeOut.bind(this);
    this.setToken = this.setToken.bind(this);
  }
  setToken(token) {
    this.setState({ token: token });
    localStorage.setItem('token', this.state.token);
  }
  logMein() {
    this.setState({ isLogged: true, message: 'LOGOUT' });
  }
  logMeOut = () => {
    localStorage.removeItem('token');
    this.setState({ isLogged: false, message: 'LOGIN' });
  }

  render() {
    return (
      <Router>
        <Switch>
          {/*individual routes for every page */}
          <Route
            path="/"
            exact
            render={(props) => <Main
              {...props}
              isLogged={this.state.isLogged}
              message={this.state.message}
              logout={this.logMeOut}
              login={this.logMein}
            />} />
          <Route
            path="/login"
            exact
            render={(props) => <Login
              {...props}
              isLogged={this.state.isLogged}
              message={this.state.message}
              login={this.logMein}
              setToken={this.setToken}
              logout={this.logMeOut}
            />} />
          <Route
            path="/register"
            exact
            render={(props) => <Register
              {...props}
              isLogged={this.state.isLogged}
              message={this.state.message}
              logout={this.logMeOut}
              login={this.logMein}
            />} />
          <Route
            path="/dashboard"
            exact
            render={(props) => <Dashboard
              {...props}
              isLogged={this.state.isLogged}
              message={this.state.message}
              logout={this.logMeOut}
              login={this.logMein}
            />} />
          <Route
            path="/favorites"
            exact
            render={(props) => <Favs
              {...props}
              isLogged={this.state.isLogged}
              message={this.state.message}
              logout={this.logMeOut}
              login={this.logMein}
            />} />
          <Route
            path="/yourposts"
            exact
            render={(props) => <YourPosts
              {...props}
              isLogged={this.state.isLogged}
              message={this.state.message}
              logout={this.logMeOut}
              login={this.logMein}
            />} />
        </Switch>
      </Router>

    );
  }
}

export default App;
