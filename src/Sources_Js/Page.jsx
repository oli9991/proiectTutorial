import React from 'react';
import '../Sources_CSS/Page.css';
import Menu from './Menu';
import ReactLoading from 'react-loading';
import MyCard from './MyCard'
import UploadPhotoForm from './UploadPhotoForm';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import Button from '@material-ui/core/Button';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            pageNo: 1,
            pageSize: 5,
            stop: false,
            timer: null,
            update: false,
            totalPhotos: 0,
        }
        console.log(`props din ${props.page}`, this.props);
        this.loadPhotos = this.loadPhotos.bind(this);
        this.likePhoto = this.likePhoto.bind(this);
        this.uploadPhoto = this.uploadPhoto.bind(this);
        this.getNoPhotos = this.getNoPhotos.bind(this);
    }
    componentDidMount() {
        document.title = this.props.page;
        this.getNoPhotos();
        this.loadPhotos();
    }
    async getNoPhotos() {
        try {
            const response = await fetch(`http://${window.IP}:${window.PORT}/api/poze/count`,
                {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    }
                });
            const json = await response.json();
            this.setState({
                totalPhotos: json.data.number.count
            });
        } catch (error) {
            console.log(error);
        }
    }
    async likePhoto(photo) {
        try {
            const response = await fetch(`http://${window.IP}:${window.PORT}/api/poze/like`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },

                    body: JSON.stringify({
                        "idPoza": photo.id
                    })
                });
            console.log('liked', this.state.photos);

            if (this.props.page === 'Favorites') {

                let photosCopy = [...this.state.photos];
                let indexToBeDeleted = photosCopy.findIndex((element) => {
                    if (element.id === photo.id) {
                        return true;
                    } else {
                        return false;
                    }
                });

                if (indexToBeDeleted > -1) {
                    photosCopy.splice(indexToBeDeleted, 1);
                }
                this.setState({ photos: photosCopy });

            } else {
                var arr = this.state.photos;
                const index = arr.indexOf(photo);

                if (arr[index].likeFromMe === "0") {
                    arr[index].likes = arr[index].likes + 1;
                    arr[index].likeFromMe = "1";
                } else {
                    arr[index].likes = arr[index].likes - 1;
                    arr[index].likeFromMe = "0";
                }
                this.setState({ photos: arr });
            }
        } catch (error) {
            console.log(error);
            alert('error');
        }
    }
    async loadPhotos() {
        try {
            const response = await fetch(
                `http://${window.IP}:${window.PORT}/${this.props.pageQuery}?pageNo=${this.state.pageNo}&pageSize=${this.state.pageSize}`,
                {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    },
                });
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                const json = await response.json();
                console.log(json.data.poze);
                if (json.data.poze.length === 0) {
                    this.setState({
                        stop: true
                    });
                } else {
                    const arr = this.state.photos.concat(json.data.poze);
                    this.setState({
                        photos: arr,
                        pageNo: this.state.pageNo + 1,
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    async uploadPhoto(imagePreviewUrl, file) {
        if (imagePreviewUrl === '') {
            ToastsStore.error("Pssssss you need to upload a photo first");
        } else {
            try {
                let data = new FormData();
                var imageData = document.querySelector('input[type="file"]').files[0];
                data.append('poza', imageData);
                console.log(file);
                const response = await fetch(`http://${window.IP}:${window.PORT}/api/poze`,
                    {
                        method: "POST",
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('token'),
                        },
                        body: data
                    });

                const json = await response.json();
                console.log('resp poza', json);
                const new_photo = {
                    id : json.data.id,
                    poza : json.poza,
                    nume : json.nume,
                    likes : 0,
                    likeFromMe : '0'
                };
                const arr = this.state.photos;
                this.setState({
                    photos: arr.concat(new_photo)
                });
                console.log(this.state.photos);
                ToastsStore.success("Photo successfully posted");
                this.forceUpdate();
            } catch (error) {
                console.log(error);
                alert('error');
            }
        }
    }
    render() {
        var photos = <div>No photos... </div>;
        if (this.state.photos) {
            photos = this.state.photos.map((photo, i) => {
                return (
                    <MyCard page={this.props.page} photo={photo} key={i} likePhoto={this.likePhoto}></MyCard>
                );
            });
        } else {
            photos = <div>No photos... </div>;
        }
        return (
            <div className='container-page'>
                <div className='box-page'>
                    <Menu
                        isLogged={this.props.isLogged}
                        logout={this.props.logout}
                        login={this.props.login}
                        page={this.props.page}
                    ></Menu>
                    <div className="content-page">
                        {(this.props.page === 'Your Photos') ?
                            <UploadPhotoForm uploadPhoto={this.uploadPhoto} /> : <div></div>}
                        <div style={{
                            flexWrap: 'wrap',
                            display: 'flex',
                            flexDirection: 'row',
                            overflow: 'auto',
                            marginLeft: '1%',
                            marginTop: '1%',
                            marginBottom: '1%'
                        }}
                        >
                            {photos}
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                            {(this.state.stop) ? <p></p> :
                                <button
                                    onClick={() => {
                                        this.loadPhotos();
                                    }}
                                    className='loadMoreButton'
                                >
                                    Load photos
                          </button>
                            }
                        </div>
                    </div>
                    <ToastsContainer store={ToastsStore} />
                </div >
            </div >
        );
    }
}

export default Page;