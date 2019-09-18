import React from 'react';
import '../Sources_CSS/YourPosts.css';
import {
    InputBase,
    TextField
} from '@material-ui/core';
import { FaRegHeart, FaSearch } from 'react-icons/fa';
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
            tags: [],
            tag: '',
        }
        this.onDrop = this.onDrop.bind(this);
        this.addTag = this.addTag.bind(this);
        this.deleteTag = this.deleteTag.bind(this);
        this.tagChange = this.tagChange.bind(this);
    }
    onDrop(picture) {
        this.setState({
            picture: picture,
        });
    }
    addTag() {
        if (this.state.tag !== '') {
            const copy = this.state.tags.concat(this.state.tag);
            this.setState({ tag: '', tags: copy });
        } else {
            alert('tag invalid');
        }
    }
    deleteTag(index) {
        const copy = this.state.tags;
        copy.splice(index, 1);
        this.setState({ tags: copy });
    }
    tagChange(e) {
        this.setState({ tag: e.target.value });
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
                                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                                    <TextField
                                        style={{ width: "60%" }}
                                        id="standard-name"
                                        label="tag"
                                        value={this.state.tag}
                                        onChange={this.tagChange}
                                        margin="normal"
                                    />
                                    <Button
                                        onClick={() => this.addTag()}
                                        variant="contained"
                                        color="secondary"
                                        style={{ height: '30%%', marginLeft: '5%', marginTop: '1%', width: '40%' }}>
                                        Add tag
                                    </Button>
                                </div>
                                <div style={{ flexDirection: 'row' }}>
                                    {this.state.tags && this.state.tags.map((tag, i) => {
                                        return (
                                            <Button key={i} color='secondary' onClick={() => this.deleteTag(i)}>
                                                {tag}
                                                <DeleteIcon onClick={() => this.deleteTag(i)}></DeleteIcon>
                                            </Button>
                                        )
                                    })}
                                </div>
                                <Button
                                    // onClick={() => this.customDialog.show()}
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