import React from 'react';
// import { ToastsContainer, ToastsStore } from 'react-toasts';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

class UploadPhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePreviewUrl: '', //ca sa ne apara poza mica in dreapta (sa vedem la ce dam upload)
            file: '', //aici o sa stocam imaginea inainte de upload
        }
        this.handleImageChange = this.handleImageChange.bind(this);
        this.restore = this.restore.bind(this);
    }

    // functie de setState
    // arata ciudat pentru ca e pentru un tip = file
    // noi pana acum am avut string-uri

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
        // luam imaginea la care vrem sa dam upload si mai jos o afisam (o sa pun ---imagine preview--- la linia corespunzatoare)
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (
                <img style={{
                    display: 'flex', maxWidth: '100%', maxheight: '100%'
                }} alt='img' src={imagePreviewUrl} />);
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
                    <input type="file" //-->> tip = file dupa cum am spus mai sus
                        onChange={this.handleImageChange} />
                    <Button
                    // la apasarea butonului vrem sa facem 2 actiuni : 
                    // 1. trimitem request la server pentru upload
                    // 2. stergem imaginea preview si fisierul ca sa stim ca s-a facut upload cu succes
                        onClick={() => {
                            this.props.uploadPhoto(this.state.imagePreviewUrl, this.state.file);
                            this.restore();
                        }}
                        variant="contained"
                        color="secondary"
                        style={{ marginTop: '5%', width: '100%' }}>
                        Upload photo
                        {/* iconul de upload de pe buton */}
                    <CloudUploadIcon /> 
                    </Button>
                </form>
                <div style={{ height: '10%', width: '10%' }} >
                    {/* ---imagine preview--- */}
                    {$imagePreview} 
                </div>
            </div>
        );
    }
}

export default UploadPhotoForm;