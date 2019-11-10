import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import '../Sources_CSS/Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboardPage: false,
            favsPage: false,
            userspostsPage: false,
        }
        console.log("props", this.props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    // cand se apasa butonul de LOGOUT => se duce la functia din App
    //  (v-am zis ca am trimis functia logout (logMeOut in App.js) la Page care mai departe a trimis-o la Menu)
    handleLogout() {
        this.props.logout();
    }
    // ca sa setez cum sa imi apara Link-urile la Meniu 
    // am nevoie sa fac asta inainte de rendare pentru ca ar fi prea tarziu dupa
    UNSAFE_componentWillMount() {
        // folosesc 3 variable pentru fiecare pagina
        // daca am ruta pentru FAVORITE atunci variabila favsPage o sa fie pe 'on' (adica true) => o sa aiba un design diferit fata de restul
        switch (this.props.page) {
            case "Dashboard":
                this.setState({
                    dashboardPage: true,
                    favsPage: false,
                    userspostsPage: false,
                })
                break
            case "Favorites":
                this.setState({
                    dashboardPage: false,
                    favsPage: true,
                    userspostsPage: false,
                })
                break
            case "Your Photos":
                this.setState({
                    dashboardPage: false,
                    favsPage: false,
                    userspostsPage: true,
                })
                break
            default:
                break
        }
        // daca inca exista jwt-ul in memoria browserului atunci => stai logged in
        if (localStorage.getItem('token')) {
            this.props.login();
        }
    }
    render() {
        // daca nu exista jwt => redirectionez utilizatorul la pagina principala cand nu e nimeni logat
        if (!localStorage.getItem('token')) {
            return (
                <Redirect to='/'></Redirect>
            )
        } else {
            return (
                <div className='menu-logged'>
                    {/* am folosit iar rendarea conditionala
                        'current-link' e pentru pagina pe care suntem
                        'link' sunt restul
                     */}
                    <Link to='/dashboard' className={(this.state.dashboardPage === true) ? 'current-link' : 'link'}>ALL PHOTOS</Link>
                    <Link to='/favorites' className={(this.state.favsPage === true) ? 'current-link' : 'link'} >YOUR FAVS</Link>
                    <Link to='/yourposts' className={(this.state.userspostsPage === true) ? 'current-link' : 'link'} >YOUR PHOTOS</Link>
                    <Link onClick={() => this.handleLogout()} to='/' className="link">LOGOUT</Link>
                </div>
            );
        }
    }
}

export default Menu;