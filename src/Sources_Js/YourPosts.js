import React from 'react';
import '../Sources_CSS/YourPosts.css';
import Menu from './Menu';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import ReactLoading from 'react-loading';

class YourPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: '',
            photos: [],
            pageNo: 0,
            pageSize: 4,
            stop: false,
        }
        this.uploadPhoto = this.uploadPhoto.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.loadPhotos = this.loadPhotos.bind(this);
        this.likePhoto = this.likePhoto.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        document.title = "Your Posts";
        this.loadPhotos().then(() => {
            this.loadPhotos().then(() => {
                this.loadPhotos();
            });
        });
    }
    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
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
            console.log('liked');
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
    async uploadPhoto() {
        console.log('poza', this.state.file);
        if (this.state.imagePreviewUrl === '') {
            ToastsStore.error("Pssssss you need to upload a photo first");
        } else {
            try {
                let data = new FormData();
                var imageData = document.querySelector('input[type="file"]').files[0];
                data.append('poza', imageData);
                console.log(this.state.file);
                const response = await fetch('http://3.19.223.148:3000/api/poze',
                    {
                        method: "POST",
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('token'),
                        },

                        body: data
                    });
                const json = await response.json();
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                ToastsStore.success("Photo successfully posted");
                window.location.reload();
                this.setState({
                    file: '',
                    imagePreviewUrl: '',
                });
                console.log('poza pusa', json);
            } catch (error) {
                console.log(error);
                alert('error');
            }
        }
    }

    async loadPhotos() {
        try {
            const response = await fetch(
                `http://3.19.223.148:3000/api/poze/colectiaMea?pageNo=${this.state.pageNo + 1}&pageSize=${this.state.pageSize}`,
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
                this.setState({
                    photos: this.state.photos.concat(json.data.poze),
                    pageNo: this.state.pageNo + 1
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img style={{
                display: 'flex', maxWidth: '100%', maxheight: '100%'
            }
            } src={imagePreviewUrl} />);
        }
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
            <div className='container-yourposts'>
                <div className='box-yourposts'>
                    <Menu
                        isLogged={this.props.isLogged}
                        logout={this.props.logout}
                        login={this.props.login}
                    ></Menu>
                    <div className="content-yourposts">
                        <div style={{ width: '70%', height: '20%', marginLeft: '2%', marginTop: '1%', flexDirection: 'row', display: 'flex' }}>
                            <form onSubmit={this._handleSubmit} style={{ flexDirection: 'column', display: 'flex', marginRight: '5%' }}>
                                <input type="file" onChange={this.handleImageChange} />
                                <Button
                                    onClick={() => this.uploadPhoto()}
                                    variant="contained"
                                    color="secondary"
                                    style={{ height: '25%', marginTop: '10%', width: '100%' }}>
                                    Upload photo
                                    <CloudUploadIcon />
                                </Button>
                            </form>
                            <div style={{ height: '10%', width: '10%' }} >
                                {$imagePreview}
                            </div>
                        </div>
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
                            {(this.state.stop) ? <p></p> : <ReactLoading type={'bubbles'} color={'#fb8d98'} height={'20%'} width={'20%'} />}
                        </div>
                        <ToastsContainer store={ToastsStore} />
                    </div>
                </div>
            </div>
        );
    }
}

export default YourPosts;