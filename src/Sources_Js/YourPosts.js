import React from 'react';
import '../Sources_CSS/YourPosts.css';
import {
    TextField
} from '@material-ui/core';
import { FaRegHeart } from 'react-icons/fa';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import SkyLight from 'react-skylight';
import ImageUploader from 'react-images-upload';
import DeleteIcon from '@material-ui/icons/Delete';

class YourPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: '',
        }
        this.onDrop = this.onDrop.bind(this);
        this.uploadPhoto = this.uploadPhoto.bind(this);
    }
    onDrop(picture) {
        this.setState({
            picture: picture,
        });
    }
    async uploadPhoto() {
        if (this.state.picture !== '') {
            try {
                let data = new FormData();
                data.append('image', this.state.picture.image);
                data.append('name', this.state.picture.name);
                const response = await fetch('http://3.19.223.148:3000/api/poze',
                    {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': 'Bearer ' + localStorage.getItem('token'),
                        },

                        body: JSON.stringify({
                            "poza": data,
                        }),
                    });
                if (!response.ok) {
                    throw Error(response.statusText);
                }
            } catch (error) {
                console.log(error);
                alert('error');
            }
        }

    }
    render() {
        var myDialog = {
            backgroundColor: 'whitesmoke',
            color: '#000000',
            width: '50%',
            height: '70%',
            marginTop: '-20%',
            marginLeft: '-25%',
            alignItems: 'center',
            justifyContent: 'center'
        };

        return (
            <div className='container-yourposts'>
                <div className='box-yourposts'>
                    <Link to='/'> < FaRegHeart color="#fb8d98" size={45} style={{ marginLeft: '5%' }}></FaRegHeart></Link>
                    <Menu
                        isLogged={this.props.isLogged}
                        logout={this.props.logout}
                        login={this.props.login}
                    ></Menu>
                    <div className="content-yourposts">
                        <Button
                            onClick={() => this.customDialog.show()}
                            variant="contained"
                            color="secondary"
                            style={{ height: '5%', marginLeft: '5%', marginTop: '1%', width: '10%' }}>
                            Upload photo
                        </Button>
                        <SkyLight
                            dialogStyles={myDialog}
                            hideOnOverlayClicked
                            ref={ref => this.customDialog = ref} title="Add photo">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <ImageUploader
                                    withIcon={true}
                                    buttonText='Choose image'
                                    onChange={this.onDrop}
                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                    maxFileSize={5242880}
                                />
                                <Button
                                    onClick={() => this.uploadPhoto}
                                    variant="contained"
                                    color="secondary"
                                    style={{
                                        height: '10%',
                                        width: '90%',
                                        position: 'absolute',
                                        bottom: '5%',
                                    }}>
                                    Upload
                            <CloudUploadIcon />
                                </Button>
                            </div>
                        </SkyLight>
                    </div>
                </div>
            </div>
        );
    }
}

export default YourPosts;