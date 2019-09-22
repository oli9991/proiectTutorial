import React from 'react';
import { Link } from 'react-router-dom';
import '../Sources_CSS/Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        console.log("props", this.props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout() {
        this.props.logout();
    }
    componentWillMount() {
        console.log('token', localStorage.getItem('token'));
        if (localStorage.getItem('token')) {
            this.props.login();
        }
    }
    render() {
        if (this.props.isLogged === false) {
            return (
                <div className='menu'>
                    <Link to='/login' className="link">LOGIN</Link>
                </div>
            )
        } else if (this.props.isLogged) {
            return (
                <div className='menu-logged'>
                    <Link to='/dashboard' className="link">ALL PHOTOS</Link>
                    <Link to='/favorites' className="link" >YOUR FAVS</Link>
                    <Link to='/yourposts' className="link" >YOUR PHOTOS</Link>
                    {/* <Link to='/profile' className="link">PROFILE</Link> */}
                    <Link onClick={() => this.handleLogout()} to='/' className="link">LOGOUT</Link>
                </div>
            );
        }
    }
}

export default Menu;