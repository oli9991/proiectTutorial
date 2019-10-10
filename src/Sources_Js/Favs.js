import React from 'react';
import '../Sources_CSS/Favs.css';
import Menu from './Menu';
import ReactLoading from 'react-loading';
import MyCard from './MyCard'

class Favs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            pageNo: 0,
            pageSize: 4,
            stop: false,
        }
        this.loadPhotos = this.loadPhotos.bind(this);
        this.likePhoto = this.likePhoto.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

    }

    componentDidMount() {
        document.title = "Favorites";
        this.loadPhotos().then(() => {
            this.loadPhotos().then(() => {
                this.loadPhotos();
            });
        });
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
                <MyCard photo={photo} key={i} likePhoto={this.likePhoto}></MyCard>
            );
        })
        return (
            <div className='container-favs'>
                <div className='box-favs'>
                    <Menu
                        isLogged={this.props.isLogged}
                        logout={this.props.logout}
                        login={this.props.login}
                        page={"favsPage"}
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
                            {(this.state.stop) ? <p></p> :
                                <ReactLoading type={'bubbles'} color={'#fb8d98'} height={'20%'} width={'20%'} />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Favs;