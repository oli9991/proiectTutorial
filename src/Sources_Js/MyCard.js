import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';


class MyCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                style={{
                    display: 'display',
                    width: '20%',
                    marginBottom: '1%',
                }}>
                <Card
                    style={{
                        width: '90%',
                        flexDirection: 'column',
                        display: 'flex',
                        height: '100%',
                        alignItems: 'center',
                        background: 'whitesmoke'
                    }}>
                    <CardContent
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: "95%",
                            width: '95%',
                        }}>
                        <img
                        // primesc date de pe server in format b64 si trebuie sa formez imaginea originala
                            src={`data:image/jpeg;base64,${this.props.photo.poza}`}
                            // objectFit ajuta la asezarea unei poze intr-un div (sa se vada toata, sa fie marita, etc)
                            style={{ objectFit: 'scale-down', height: '100%', width: "100%" }}
                            // fiecare imagine trebuie sa aiba alt
                            alt='img'>
                        </img>
                    </CardContent>
                    <CardActions disableSpacing style={{ display: 'flex', height: '10%' }}>
                        <IconButton
                            aria-label="add to favorites"
                            onClick={() => this.props.likePhoto(this.props.photo)}
                            className="icon"
                        >
                            {/* rendare conditionala in rendare conditionala */}
                            {/* REMINDER
                                rendarea conditionala este un inline IF din C/C++ (if ... else if)
                             */}
                            {(this.props.page === 'Favorites') ?
                                <FavoriteIcon color='secondary' /> :
                                (this.props.photo.likeFromMe === "1") ?
                                    <FavoriteIcon color='secondary' /> :
                                    <FavoriteIcon />
                            }
                        </IconButton>
                        <p>
                            {/* daca poza mea are un like atunci o sa zic la singular */}
                            {(this.props.photo.likes === 1) ?
                                `${this.props.photo.likes} heart` : `${this.props.photo.likes} hearts`}
                        </p>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default MyCard;