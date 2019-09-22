import React from 'react';
import '../Sources_CSS/AllPhotos.css';
import { FaRegHeart } from 'react-icons/fa';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

class AllPhotos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            cards: [
                { author: 'Jamie J', date: 'Feb 18, 2019', image: 'juice.png', hearts: 10, heartit: false },
                { author: 'Emmly', date: 'Jan 11, 2017', image: 'recipe.png', hearts: 1, heartit: false },
                { author: 'Emmly', date: 'Jan 11, 2018', image: 'recipe.jpg', hearts: 10, heartit: false },
                { author: 'Emmaly', date: 'Jan 12, 2018', image: 'limo.jpeg', hearts: 15, heartit: false },
                { author: 'Emm', date: 'Jan 12, 2018', image: 'smth.jpg', hearts: 13, heartit: false },
                { author: 'Emma', date: 'Jan 22, 2018', image: 'pumpkin.jpg', hearts: 13, heartit: false },
                { author: 'Emmaly', date: 'Jan 11, 2018', image: 'recipe.jpg', hearts: 113, heartit: false },
                { author: 'Emy', date: 'Jan 12, 2018', image: 'limo.jpeg', hearts: 11, heartit: false },
                { author: 'AL', date: 'Jan 12, 2018', image: 'smth.jpg', hearts: 12, heartit: false },
                { author: 'Jamie J', date: 'Feb 18, 2019', image: 'juice.png', hearts: 11, heartit: false },
                { author: 'Emmly', date: 'Jan 11, 2017', image: 'recipe.png', hearts: 100, heartit: false },
                { author: 'Emmly', date: 'Jan 11, 2018', image: 'recipe.jpg', hearts: 125, heartit: false },
            ],
        }
        this.heartPhoto = this.heartPhoto.bind(this);
    }
    heartPhoto(cardIndex) {
        const copy = this.state.cards[cardIndex];
        const arr = this.state.cards;
        if (copy.heartit === false) {
            arr[cardIndex].hearts = copy.hearts + 1;
        } else {
            arr[cardIndex].hearts = copy.hearts - 1;
        }
        arr[cardIndex].heartit = !copy.heartit;
        this.setState({ cards: arr });

    }
    render() {
        const cards = this.state.cards.map((card, i) => {
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
                            <p>{card.hearts}</p>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        );
        return (
            <div className='container-allphotos'>
                <div className='box-allphotos'>
                    <Link to='/'> < FaRegHeart color="#fb8d98" size={45} style={{ marginLeft: '5%' }}></FaRegHeart></Link>
                    <Menu
                        isLogged={this.props.isLogged}
                        logout={this.props.logout}
                        login={this.props.login}
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