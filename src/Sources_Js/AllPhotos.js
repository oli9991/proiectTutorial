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

class AllPhotos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            cards: [
                { author: 'Jamie J', date: 'Feb 18, 2019', image: 'juice.png', tags: ['healthy', 'vegan', 'veggies'], heartit: false },
                { author: 'Emmly', date: 'Jan 11, 2017', image: 'recipe.png', tags: ['sweet', 'oven', 'bakedgoods'], heartit: false },
                { author: 'Emmly', date: 'Jan 11, 2018', image: 'recipe.jpg', tags: ['diy', 'cooking'], heartit: false },
                { author: 'Emmaly', date: 'Jan 12, 2018', image: 'limo.jpeg', tags: ['diy', 'lemon', 'summer'], heartit: false },
                { author: 'Emm', date: 'Jan 12, 2018', image: 'smth.jpg', tags: ['brunch', 'cook', 'oven'], heartit: false },
                { author: 'Emma', date: 'Jan 22, 2018', image: 'pumpkin.jpg', tags: ['brunch', 'cook', 'oven'], heartit: false },
                { author: 'Emmaly', date: 'Jan 11, 2018', image: 'recipe.jpg', tags: ['diy', 'cooking'], heartit: false },
                { author: 'Emy', date: 'Jan 12, 2018', image: 'limo.jpeg', tags: ['diy', 'lemon', 'summer'], heartit: false },
                { author: 'AL', date: 'Jan 12, 2018', image: 'smth.jpg', tags: ['brunch', 'cook', 'oven'], heartit: false },
                { author: 'Jamie J', date: 'Feb 18, 2019', image: 'juice.png', tags: ['healthy', 'vegan', 'veggies'], heartit: false },
                { author: 'Emmly', date: 'Jan 11, 2017', image: 'recipe.png', tags: ['sweet', 'oven', 'bakedgoods'], heartit: false },
                { author: 'Emmly', date: 'Jan 11, 2018', image: 'recipe.jpg', tags: ['diy', 'cooking'], heartit: false },
            ],
            id: '',
        }
        this.handleExpandClick = this.handleExpandClick.bind(this);
        this.heartPhoto = this.heartPhoto.bind(this);
    }
    handleExpandClick(cardIndex) {
        this.setState({
            id: cardIndex,
            expanded: !this.state.expanded
        });
    }
    heartPhoto(cardIndex) {
        const copy = this.state.cards[cardIndex].heartit;
        const arr = this.state.cards;
        arr[cardIndex].heartit = !copy;
        this.setState({ cards: arr });

    }
    render() {
        const cards = this.state.cards.map((card, i) => {
            if (i === this.state.id) {
                return (
                    <div
                        key={i}
                        style={{ display: 'flex', width: '22%', flexDirection: 'column', marginLeft: '2%', marginTop: '2%', overflow: 'auto' }}>
                        <Card>
                            <CardHeader
                                style={{ fontSize: 'small', }}
                                title={`by ${card.author}`}
                                subheader={card.date}
                            />
                            <CardContent
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={require(`../${card.image}`)} alt='img' ></img>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    {(card.heartit) ?
                                        <FavoriteIcon color='secondary' onClick={() => this.heartPhoto(i)} /> :
                                        <FavoriteIcon onClick={() => this.heartPhoto(i)} />
                                    }
                                </IconButton>
                                <IconButton
                                    onClick={() => this.handleExpandClick(i)}
                                    aria-expanded={this.state.expanded}
                                >
                                    See tags
                            </IconButton>
                            </CardActions>
                            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    {card.tags.map((tag, ind) => {
                                        return (<p key={ind}>
                                            #{tag}
                                        </p>)
                                    })}
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                )
            } else {
                return (
                    <div
                        key={i}
                        style={{ display: 'flex', width: '22%', flexDirection: 'column', marginLeft: '2%', marginTop: '2%', overflow: 'auto' }}>
                        <Card>
                            <CardHeader
                                style={{ fontSize: 'small', }}
                                title={`by ${card.author}`}
                                subheader={card.date}
                            />
                            <CardContent
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={require(`../${card.image}`)} alt='img' ></img>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    {(card.heartit) ?
                                        <FavoriteIcon color='secondary' onClick={() => this.heartPhoto(i)} /> :
                                        <FavoriteIcon onClick={() => this.heartPhoto(i)} />
                                    }
                                </IconButton>
                                <IconButton
                                    onClick={() => this.handleExpandClick(i)}
                                    aria-expanded={this.state.expanded}
                                >
                                    See tags
                            </IconButton>
                            </CardActions>
                        </Card>
                    </div>
                )
            }
        });
        return (
            <div className='container-allphotos'>
                <div className='box-allphotos'>
                    <Link to='/'> < FaRegHeart color="#fb8d98" size={45} style={{ marginLeft: '5%' }}></FaRegHeart></Link>
                    <Menu
                        isLogged={this.props.isLogged}
                        logout={this.props.logout}
                    ></Menu>
                    <div className="content-allphotos">
                        {cards}
                    </div>
                </div>
            </div>
        );
    }
}

export default AllPhotos;