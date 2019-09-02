import React from 'react';
import '../Sources_CSS/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLogged : false,
      message: 'LOGIN'
    }
    this.login = this.login.bind(this);
  }
  login(){
    this.setState({isLogged : true, message : 'LOGOUT'});
  }
  render() {
    return (
      <Router>
        <Switch>
          {/*individual routes for every page */}
          {/* role admin has different routes */}
          <Route
            path="/"
            exact
            render={(props) => <Dashboard
              {...props}
              isLogged={this.state.isLogged}
              message={this.state.message}
            />} />
        </Switch>
      </Router>

    );
  }
}

export default App;
