import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';


class MyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: this.props.photo
        }
    }
    render() {
        return (
            <div
                style={{
                    display: 'display',
                    width: '20%',
                    marginBottom: '1%',
                    height: '45%',

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
                            src={`data:image/jpeg;base64,${this.state.photo.poza}`}
                            style={{ objectFit: 'scale-down', height: '100%', width: "100%" }}
                            alt='img'>
                        </img>
                    </CardContent>
                    <CardActions disableSpacing style={{ display: 'flex', height: '10%' }}>
                        <IconButton
                            aria-label="add to favorites"
                            onClick={() => this.props.likePhoto(this.state.photo.id, this.state.photo)}
                            className="icon"
                        >
                            {(this.state.photo.likeFromMe === "1") ?
                                <FavoriteIcon color='secondary' /> :
                                <FavoriteIcon />
                            }
                        </IconButton>
                        <p>{(this.state.photo.likes === 1) ? `${this.state.photo.likes} heart` : `${this.state.photo.likes} hearts`}</p>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default MyCard;