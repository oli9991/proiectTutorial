import React from 'react';
import { Link } from 'react-router-dom';
import '../Sources_CSS/Menu.css';
import {
    InputBase,
    TextField
} from '@material-ui/core';
import { FaRegHeart, FaSearch } from 'react-icons/fa';


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
    render() {
        if (this.props.isLogged === false) {
            return (
                <div className='menu'>
                    {/* <FaRegHeart color="#fb8d98" size={25} style={{ marginLeft: '5%' }}></FaRegHeart> */}
                    <Link to='/login' className="link">LOGIN</Link>
                </div>
            )
        } else {
            return (
                <div className='menu-logged'>
                    {/* <FaRegHeart color="#fb8d98" size={25} style={{ marginLeft: '5%' }}></FaRegHeart> */}
                    <Link to='/dashboard' className="link">ALL PHOTOS</Link>
                    <Link to='/favorites' className="link" >YOUR FAVS</Link>
                    <Link to='/yourphotos' className="link" >YOUR PHOTOS</Link>
                    <Link to='/profile' className="link">PROFILE</Link>
                    <Link onClick={() => this.handleLogout()} to='/' className="link">LOGOUT</Link>
                    <div className="searchbar">
                        <InputBase
                            style={{ width: '90%' }}
                            placeholder="Search photo..."
                            inputProps={{ 'aria-label': 'Search' }}
                        />
                        <FaSearch color="#fdbfc5"> </FaSearch>
                    </div>
                </div>
            );
        }
    }
}

export default Menu;