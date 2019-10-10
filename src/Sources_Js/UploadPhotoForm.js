import React from 'react';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

class UploadPhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePreviewUrl: '',
            file: '',
        }
        this.handleImageChange = this.handleImageChange.bind(this);
        this.uploadPhoto = this.uploadPhoto.bind(this);
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
    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (
                <img style={{
                    display: 'flex', maxWidth: '100%', maxheight: '100%'
                }
                } src={imagePreviewUrl} />);
        }
        return (
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
                <ToastsContainer store={ToastsStore} />
            </div>
        );
    }
}

export default UploadPhotoForm;