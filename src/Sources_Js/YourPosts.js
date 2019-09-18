import React from 'react';
import '../Sources_CSS/AllPhotos.css';
import {
    InputBase,
    TextField
} from '@material-ui/core';
import { FaRegHeart, FaSearch } from 'react-icons/fa';
import Menu from './Menu';
import Login from './Login';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

class YourPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='container-allphotos'>
                <div className='box-allphotos'>
                    <Link to='/'> < FaRegHeart color="#fb8d98" size={45} style={{ marginLeft: '5%' }}></FaRegHeart></Link>
                    <Menu
                        isLogged={this.props.isLogged}
                        logout={this.props.logout}
                    ></Menu>
                    <div className="content-allphotos">
                    YourPosts
                    </div>
                </div>
            </div>
        );
    }
}

export default YourPosts;