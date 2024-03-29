import React from 'react';
import '../Sources_CSS/Main.css';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHeartit: false,
            hearts: 0,
        }
        this.changeHeart = this.changeHeart.bind(this);
    }
    changeHeart() {
        // cand am inima rosie => am 1 like (sau inimioare in cazul asta)
        // cand am inima gri => 0 likes
        if (this.state.isHeartit === true) {
            this.setState({ hearts: 0, isHeartit: false });
        } else {
            this.setState({ hearts: 1, isHeartit: true });
        }
    }

    render() {
        return (
            <div className='container-main'>
                <div className='box-main'>
                    <Link to='/'> < FaHeart color="#fb8d98" size={45} style={{ marginLeft: '5%' }}></FaHeart></Link>
                    <div className="content-main">
                        <div style={{
                            display: 'flex',
                            width: '30%',
                            flexDirection: 'column', 
                            marginLeft: '5%',
                            marginTop: '2%',
                            overflow: 'auto'
                        }}>
                            {/* Card, CardHeader, CardContent, CardAction din material-ul */}
                            <Card>
                                <CardHeader
                                    style={{ fontSize: 'small', }}
                                    title="by User1233"
                                    subheader="September 14, 2016"
                                />
                                <CardContent
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {/* cum se afiseaza o imagine in react (un mod) */}
                                    <img src={require('../juice.png')} alt='img' ></img>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton
                                        aria-label="add to favorites"
                                        onClick={() => this.changeHeart()}
                                        className="icon">
                                        {(this.state.isHeartit) ?
                                            <FavoriteIcon color='secondary' /> :
                                            <FavoriteIcon />
                                        }
                                    </IconButton>
                                    <p>
                                        {this.state.hearts}
                                    </p>
                                </CardActions>
                            </Card>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                textAlign: 'center',
                                marginLeft: '25%',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                color: '#553D67'
                            }}>
                            <h1>POST IT. </h1>
                            <h1>HEART IT. </h1>
                            <h1>SAVE IT. </h1>
                            {/* link catre pagina de login */}
                            <Link to='/login' className="link-login">
                                <h1>LOGIN</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;