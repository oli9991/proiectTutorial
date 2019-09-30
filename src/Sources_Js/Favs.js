import React from 'react';
import '../Sources_CSS/Favs.css';
import Menu from './Menu';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

class Favs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            pageNo: 0,
            pageSize: 11,
            stop: false,
        }
        this.loadPhotos = this.loadPhotos.bind(this);
        this.likePhoto = this.likePhoto.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

    }
    UNSAFE_componentWillMount() {
        this.loadPhotos();

    }
    componentDidMount() {
        document.title = "Favorites";
    }
    handleScroll = e => {
        let element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            this.loadPhotos();
        }
    }
    async likePhoto(id, photo) {
        try {
            const response = await fetch('http://3.19.223.148:3000/api/poze/like',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },

                    body: JSON.stringify({
                        "idPoza": id
                    })
                });
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const arr = this.state.photos;
            const index = arr.indexOf(photo);
            arr.splice(index, 1);
            this.setState({
                photos: arr
            })
            console.log('poze acum', this.state.photos);
        } catch (error) {
            console.log(error);
            alert('error');
        }
    }
    async loadPhotos() {
        try {
            const response = await fetch(
                `http://3.19.223.148:3000/api/poze/like/?pageNo=${this.state.pageNo + 1}&pageSize=${this.state.pageSize}`,
                {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },
                });
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            console.log(json.data.poze);
            if (json.data.poze.length === 0) {
                this.setState({
                    ...this.state,
                    stop: true
                })
            } else {
                this.setState({
                    ...this.state,
                    photos: this.state.photos.concat(json.data.poze),
                    pageNo: this.state.pageNo + 1
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        const photos = this.state.photos && this.state.photos.map((photo, i) => {
            return (
                <div
                    key={i}
                    style={{
                        display: 'display',
                        width: '20%',
                        overflow: 'auto',
                        marginBottom: '1%',
                    }}>
                    <Card
                        style={{
                            width: '90%',
                            flexDirection: 'column',
                            display: 'flex'
                        }}>
                        <CardContent
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: "90%"
                            }}>
                            <img
                                src={`data:image/jpeg;base64,${photo.poza}`}
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                                alt='img'>
                            </img>
                        </CardContent>
                        <CardActions disableSpacing style={{ display: 'flex', height: '10%' }}>
                            <IconButton
                                aria-label="add to favorites"
                                onClick={() => this.likePhoto(photo.id, photo)}
                                className="icon">
                                <FavoriteIcon color='secondary' />
                            </IconButton>
                            <p>{(photo.likes === 1) ? `${photo.likes} heart` : `${photo.likes} hearts`}</p>
                        </CardActions>
                    </Card>
                </div>
            );
        })
        return (
            <div className='container-favs'>
                <div className='box-favs'>
                    <Menu
                        isLogged={this.props.isLogged}
                        logout={this.props.logout}
                        login={this.props.login}
                    ></Menu>
                    <div className="content-favs">
                        <div style={{
                            flexWrap: 'wrap',
                            display: 'flex',
                            flexDirection: 'row',
                            overflow: 'auto',
                            marginLeft: '1%',
                            marginTop: '1%'
                        }} onScroll={this.handleScroll}
                        >
                            {photos}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Favs;