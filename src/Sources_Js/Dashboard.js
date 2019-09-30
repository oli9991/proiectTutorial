import React from 'react';
import '../Sources_CSS/Dashboard.css';
import Menu from './Menu';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

class AllPhotos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            pageNo: 1,
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
        document.title = "Dashboard";
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
            console.log('liked', this.state.photos);
            const arr = this.state.photos;
            const index = arr.indexOf(photo);

            if (arr[index].likeFromMe === "0") {
                arr[index].likes = arr[index].likes + 1;
                arr[index].likeFromMe = "1";
            } else {
                arr[index].likes = arr[index].likes - 1;
                arr[index].likeFromMe = "0";
            }
            this.setState({ photos: arr });
        } catch (error) {
            console.log(error);
            alert('error');
        }
    }
    async loadPhotos(e) {
        try {
            const response = await fetch(
                `http://3.19.223.148:3000/api/poze/?pageNo=${this.state.pageNo}&pageSize=${this.state.pageSize}`,
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
                    stop: true
                })
            } else {
                const arr = this.state.photos.concat(json.data.poze);
                this.setState({
                    photos: arr,
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
                                className="icon"
                            >
                                {(photo.likeFromMe === "1") ?
                                    <FavoriteIcon color='secondary' /> :
                                    <FavoriteIcon />
                                }
                            </IconButton>
                            <p>{(photo.likes === 1) ? `${photo.likes} heart` : `${photo.likes} hearts`}</p>
                        </CardActions>
                    </Card>
                </div>
            );
        })
        return (
            <div className='container-dashboard'>
                <div className='box-dashboard'>
                    <Menu
                        isLogged={this.props.isLogged}
                        logout={this.props.logout}
                        login={this.props.login}
                    ></Menu>
                    <div className="content-dashboard">
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
                </div >
            </div >
        );
    }
}

export default AllPhotos;