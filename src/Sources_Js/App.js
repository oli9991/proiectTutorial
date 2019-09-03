import React from 'react';
import '../Sources_CSS/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import AllPhotos from './AllPhotos';
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
        </Switch>
      </Router>

    );
  }
}

export default App;
