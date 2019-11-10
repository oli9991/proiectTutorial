import React from 'react';
import './Sources_CSS/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Sources_Js/Main';
import { ToastsStore } from 'react-toasts';
import Form from './Sources_Js/Form';
import Page from './Sources_Js/Page';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // sa stiu daca user-ul s-a logat
      isLogged: false,
      token: '', //jwt
    }

// am salvat IP-ul si portul intr-o variabila globala
    window.IP = '192.168.1.4';
    window.PORT = '3000';

    this.logMeIn = this.logMeIn.bind(this);
    this.logMeout = this.logMeOut.bind(this);
    this.setToken = this.setToken.bind(this);
    this.loginRequest = this.loginRequest.bind(this);
    this.registerRequest = this.registerRequest.bind(this);
  }

  // request login
  async loginRequest(email, password) {
    // ma asigur ca utilizatorul a introdus date
    if (email === '' || password === '') {
      alert('pss...ai uitat sa completezi campuri');
    } else {
      try {
        const response = await fetch(`http://${window.IP}:${window.PORT}/api/auth/autentificare`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              "email": email,
              "password": password
            }),
          });
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // afisez un mesaj de succes
        ToastsStore.success(`You are now logged in!`);
  
        const json = await response.json(); //raspunsul sub forma de JSON de la server

        this.setToken(json.data.token); //setez jwt-ul si il salvez in memoria browser-ului 
        this.logMeIn();

      } catch (error) {
        console.log(error);
        alert('invalid password or email'); //alert o sa imi afiseze o casuta sus in browser
      }
    }
  }

  // request register
  async registerRequest(email, password) {
    if (email === '' || password === '') {
      alert('pss...ai uitat sa completezi campuri');
    } else {
      try {
        const response = await fetch(`http://${window.IP}:${window.PORT}/api/auth/inregistrare`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              "email": email,
              "password": password
            }),
          });
        if (!response.ok) {
          throw Error(response.statusText);
        }
        ToastsStore.success("You account is ready to use!");
        ToastsStore.info(`You can log in now`);
      } catch (error) {
        console.log(error);
        alert('invalid password or email');
      }
    }
  }

  setToken(token) {
    this.setState({ token: token });
    localStorage.setItem('token', this.state.token); //salvez in memoria browser-ului tokenul
  }
  logMeIn = () => {
    // folosesc in componenta Menu 
    this.setState({ isLogged: true }); 
  }
  logMeOut = () => {
    // daca utilizatorul apasa LOGOUT atunci sterg din memoria browser-ului jwt-ul a.i. sa nu il foloseasca altcineva
    // in Menu
    localStorage.removeItem('token');
    localStorage.removeItem('dashboardPhotos');
    this.setState({ isLogged: false});
  }

  render() {
    return (
      <Router>
        {/* folosesc Switch ca sa imi aleaga prima ruta care se potriveste cu cerinta mea (pe ce link dau eu) */}
        {/* Route seteaza o ruta.*/}

        {/* EXPLICATIE atribut 'exact' la ROUTE
          Daca nu am pune exact si am avea doua rute : '/' si '/bla'
          si scriem /bla in browser o sa ne redirectioneze la /
         */}

         {/* trimit functiile this.logMeOut si this.logMeIn (sub numele de login) la componente ca sa le trimit mai departe la Menu */}
        <Switch>
          {/* ruta primei pagini care nu e nimeni logat */}
          <Route
            path="/"
            exact
            render={(props) => <Main
              {...props}
              isLogged={this.state.isLogged} //props
              logout={this.logMeOut} //props
              login={this.logMeIn} //props
            />} />
            {/* ruta pentru login */}
          <Route
            path="/login"
            exact
            render={(props) => <Form
              {...props}
              redirectMessage="You don't have an account? Register now"  //mesaj de redirectionare
              redirectLink='/register' // in caz ca utilizatorul e pe pagina de login, dar nu are cont sa stim ce link de redirectionare sa ii dam
              request={this.loginRequest} //props pentru ce request sa facem
              isLogged={this.state.isLogged}
              setToken={this.setToken}  
              logout={this.logMeOut}
            />} />
            {/* ruta pentru register */}
          <Route
            path="/register"
            exact
            render={(props) => <Form
              {...props}
              redirectLink='/login'
              redirectMessage="You already have an account? Login"
              request={this.registerRequest}
              isLogged={this.state.isLogged}
              logout={this.logMeOut}
            />} />
            {/* ruta pentru toate pozele */}
          <Route
            path="/dashboard"
            exact
            key="dashboard"
            render={(props) => <Page
              {...props}
              page='Dashboard'   //sa stiu pe ce pagina sunt
              pageQuery='api/poze/' //sa stiu de pe ce ruta sa trag pozele
              isLogged={this.state.isLogged} 
              logout={this.logMeOut}
              login={this.logMeIn}
            />} />
            {/* ruta pentru favorite */}
          <Route
            path="/favorites"
            exact
            key="favorites page"
            render={(props) => <Page
              {...props}
              page='Favorites'
              pageQuery='api/poze/like'
              isLogged={this.state.isLogged}
              logout={this.logMeOut}
              login={this.logMeIn}
            />} />
            {/* ruta pentru pozele utilizatorului curent */}
          <Route
            path="/yourposts"
            exact
            key="usersphotos"
            render={(props) => <Page
              {...props}
              page='Your Photos'
              pageQuery='api/poze/colectiaMea'
              isLogged={this.state.isLogged}
              logout={this.logMeOut}
              login={this.logMeIn}
            />} />
        </Switch>
      </Router>

    );
  }
}

export default App;
