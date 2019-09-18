import React from 'react';
import './Sources_CSS/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Sources_Js/Dashboard';
import Login from './Sources_Js/Login';
import Register from './Sources_Js/Register';
import AllPhotos from './Sources_Js/AllPhotos';
import Favs from './Sources_Js/Favs';
import YourPosts from './Sources_Js/YourPosts';
import Profile from './Sources_Js/Profile';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      message: 'LOGIN'
    }
    this.logMein = this.logMein.bind(this);
    this.logMeout = this.logMeOut.bind(this);
  }
  logMein = () => {
    this.setState({ isLogged: true, message: 'LOGOUT' });
  }
  logMeOut = () => {
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
            render={(props) => <Dashboard
              {...props}
              isLogged={this.state.isLogged}
              message={this.state.message}
              logout={this.logMeOut}
            />} />
          <Route
            path="/login"
            exact
            render={(props) => <Login
              {...props}
              isLogged={this.state.isLogged}
              message={this.state.message}
              login={this.logMein}
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
            />} />
          <Route
            path="/dashboard"
            exact
            render={(props) => <AllPhotos
              {...props}
              isLogged={this.state.isLogged}
              message={this.state.message}
              logout={this.logMeOut}
            />} />
          <Route
            path="/favorites"
            exact
            render={(props) => <Favs
              {...props}
              isLogged={this.state.isLogged}
              message={this.state.message}
              logout={this.logMeOut}
            />} />
          <Route
            path="/yourposts"
            exact
            render={(props) => <YourPosts
              {...props}
              isLogged={this.state.isLogged}
              message={this.state.message}
              logout={this.logMeOut}
            />} />
          <Route
            path="/profile"
            exact
            render={(props) => <Profile
              {...props}
              isLogged={this.state.isLogged}
              message={this.state.message}
              logout={this.logMeOut}
            />} />

        </Switch>
      </Router>

    );
  }
}

export default App;
