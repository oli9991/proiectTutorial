import React from 'react';
import '../Sources_CSS/Dashboard.css';
import { FaRegHeart } from 'react-icons/fa';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            isHeartit: false,
        }
        this.handleExpandClick = this.handleExpandClick.bind(this);
        this.changeHeart = this.changeHeart.bind(this);
    }
    changeHeart() {
        this.setState({ isHeartit: !this.state.isHeartit })
    }
    handleExpandClick() {
        this.setState({ expanded: !this.state.expanded });
    }
    render() {
        return (
            <div className='container-dashboard'>
                <div className='box-dashboard'>
                    <Link to='/'> < FaRegHeart color="#fb8d98" size={45} style={{ marginLeft: '5%' }}></FaRegHeart></Link>
                    <Menu
                        isLogged={this.props.isLogged}
                        logout={this.props.logout}
                    ></Menu>
                    <div className="content-dashboard">
                        <div style={{ display: 'flex', width: '30%', flexDirection: 'column', marginLeft: '5%', marginTop: '2%', overflow: 'auto' }}>
                            <Card>
                                <CardHeader
                                    style={{ fontSize: 'small', }}
                                    title="by User1233"
                                    subheader="September 14, 2016"
                                />
                                <CardContent
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={require('../juice.png')} alt='img' ></img>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        {(this.state.isHeartit) ?
                                            <FavoriteIcon color='secondary' onClick={() => this.changeHeart()} /> :
                                            <FavoriteIcon onClick={() => this.changeHeart()} />
                                        }
                                    </IconButton>
                                    <IconButton
                                        onClick={() => this.handleExpandClick()}
                                        aria-expanded={this.state.expanded}
                                    >
                                        See tags
                                </IconButton>
                                </CardActions>
                                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                    <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <p>#recipe  </p>
                                        <p>#cooking </p>
                                        <p>#healthy </p>
                                        <p>#diy</p>
                                        <p>#vegan</p>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                textAlign: 'center',
                                alignItems: 'center',
                                marginLeft: '25%',
                                fontFamily: 'Frakfur',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                color: '#553D67'
                            }}>
                            <h1>POST IT. </h1>
                            <h1>HEART IT. </h1>
                            <h1>SAVE IT. </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;