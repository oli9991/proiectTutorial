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
    handleLogout() {
        this.props.logout();
    }
    UNSAFE_componentWillMount() {
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
        if (localStorage.getItem('token')) {
            this.props.login();
        }
    }
    render() {
        if (!localStorage.getItem('token')) {
            return (
                <Redirect to='/'></Redirect>
            )
        } else {
            return (
                <div className='menu-logged'>
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