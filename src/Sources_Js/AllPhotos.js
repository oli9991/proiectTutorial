import React from 'react';
import '../Sources_CSS/Dashboard.css';
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
import {recipe} from '../recipe.png';

class AllPhotos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
        this.handleExpandClick = this.handleExpandClick.bind(this);
    }
    handleExpandClick() {
        this.setState({ expanded: !this.state.expanded });
    }
    render() {
        const dashboard = (
            <div>
                dashboard
            </div>
        );
        const useStyles = makeStyles(theme => ({
            media: {
                height: 0,
            },
            expand: {
                transform: 'rotate(0deg)',
                marginLeft: 'auto',
                transition: theme.transitions.create('transform', {
                    duration: theme.transitions.duration.shortest,
                }),
            },
            expandOpen: {
                transform: 'rotate(180deg)',
            },
            avatar: {
                backgroundColor: 'red',
            },
        }));
        return (
            <div className='container-dashboard'>
                <div className='box-dashboard'>
                    <Link to='/'> < FaRegHeart color="#fb8d98" size={45} style={{ marginLeft: '5%' }}></FaRegHeart></Link>
                    <Menu
                        isLogged={this.props.isLogged}
                        logout={this.props.logout}
                    ></Menu>
                    <div className="content-dashboard">
                        {/* <Card style={{height:'40vh', width:'40vh'}}>
                            <CardHeader
                                style={{fontSize:'1%'}}
                                title="by User1233"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                className={useStyles.media}
                                image={require('../recipe.png')}
                            />
                            <CardContent>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton
                                    onClick={this.handleExpandClick}
                                    aria-expanded={this.state.expanded}
                                    aria-label="show more"
                                >
                                    See tags
                                </IconButton>
                            </CardActions>
                            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <p>#recipe</p> 
                                    <p>#cooking</p>
                                </CardContent>
                            </Collapse>
                        </Card> */}
                        <div>
                            Dashboard
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AllPhotos;