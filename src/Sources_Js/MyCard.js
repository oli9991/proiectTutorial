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
                            src={`data:image/jpeg;base64,${this.props.photo.poza}`}
                            style={{ objectFit: 'scale-down', height: '100%', width: "100%" }}
                            alt='img'>
                        </img>
                    </CardContent>
                    <CardActions disableSpacing style={{ display: 'flex', height: '10%' }}>
                        <IconButton
                            aria-label="add to favorites"
                            onClick={() => this.props.likePhoto(this.props.photo)}
                            className="icon"
                        >
                            {(this.props.page === 'Favorites') ?
                                <FavoriteIcon color='secondary' /> :
                                (this.props.photo.likeFromMe === "1") ?
                                    <FavoriteIcon color='secondary' /> :
                                    <FavoriteIcon />
                            }
                        </IconButton>
                        <p>
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