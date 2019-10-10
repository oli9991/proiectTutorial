import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import '../Sources_CSS/Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboardPage: false,
            fasvPage: false,
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
            case "dashboardPage":
                this.setState({
                    dashboardPage: true,
                    fasvPage: false,
                    userspostsPage: false,
                })
                break
            case "favsPage":
                this.setState({
                    dashboardPage: false,
                    fasvPage: true,
                    userspostsPage: false,
                })
                break
            case "usersPostsPage":
                this.setState({
                    dashboardPage: false,
                    fasvPage: false,
                    userspostsPage: true,
                })
                break
            default:
                break
        }
        // console.log('token', localStorage.getItem('token'));
        if (localStorage.getItem('token')) {
            this.props.login();
        }
    }
    render() {
        if (!localStorage.getItem('token')) {
            return (
                <Redirect to='/login'></Redirect>
            )
        } else {
            return (
                <div className='menu-logged'>
                    <Link to='/dashboard' className={(this.state.dashboardPage) ? 'current-link' : 'link'}>ALL PHOTOS</Link>
                    <Link to='/favorites' className={(this.state.fasvPage) ? 'current-link' : 'link'} >YOUR FAVS</Link>
                    <Link to='/yourposts' className={(this.state.userspostsPage) ? 'current-link' : 'link'} >YOUR PHOTOS</Link>
                    <Link onClick={() => this.handleLogout()} to='/' className="link">LOGOUT</Link>
                </div>
            );
        }
    }
}

export default Menu;