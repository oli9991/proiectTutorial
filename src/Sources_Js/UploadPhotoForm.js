import React from 'react';
// import { ToastsContainer, ToastsStore } from 'react-toasts';
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
        this.restore = this.restore.bind(this);
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
    restore() {
        this.setState({
            imagePreviewUrl: '',
            file: ''
        })
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
            <div style={{
                width: '70%',
                height: '20%',
                marginLeft: '2%',
                marginTop: '1%',
                flexDirection: 'row',
                display: 'flex',
                marginBottom:'2%',
            }}>
                <form
                    onSubmit={this._handleSubmit}
                    style={{ flexDirection: 'column', display: 'flex', marginRight: '5%' }}>
                    <input type="file"
                        onChange={this.handleImageChange} />
                    <Button
                        onClick={() => {
                            this.props.uploadPhoto(this.state.imagePreviewUrl, this.state.file);
                            this.restore();
                        }}
                        variant="contained"
                        color="secondary"
                        style={{ marginTop: '5%', width: '100%' }}>
                        Upload photo
                    <CloudUploadIcon />
                    </Button>
                </form>
                <div style={{ height: '10%', width: '10%' }} >
                    {$imagePreview}
                </div>
            </div>
        );
    }
}

export default UploadPhotoForm;