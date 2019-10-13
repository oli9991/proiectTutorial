import React from 'react';
import '../Sources_CSS/Form.css';
import {
    TextField,
    InputAdornment,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { FaHeart } from 'react-icons/fa';
import { Link, Redirect } from 'react-router-dom';
import { ToastsContainer, ToastsStore } from 'react-toasts';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            password: '',
            email: ''
        }
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    handleClickShowPassword() {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }
    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
   
    render() {
        if (this.props.isLogged === true) {
            return <Redirect to='/dashboard' />
        } else {
            return (
                <div className='container-form'>
                    <div className='box-form'>
                        <Link to='/'> < FaHeart color="#fb8d98" size={45} style={{ marginLeft: '5%' }}></FaHeart></Link>
                        <div className="content-form">
                            <div className='form'>
                                <TextField
                                    className="text-field"
                                    label="Email*"
                                    variant="outlined"
                                    name='email'
                                    value={this.state.email}
                                    onChange={(e) => this.onChangeHandler(e)}
                                />
                                <TextField
                                    className="text-field"
                                    variant="outlined"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    label="Password*"
                                    name='password'
                                    value={this.state.password}
                                    onChange={(e) => this.onChangeHandler(e)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                    aria-label="toggle password visibility"
                                                    onClick={this.handleClickShowPassword}
                                                >
                                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Button
                                    onClick={() => this.props.request(this.state.email, this.state.password)}
                                    color="secondary"
                                    style={{ height: '5vh', width: '80%' }}>
                                    {(this.props.redirectLink === '/login') ? 'Register' : 'Login'}
                                </Button>
                            </div>
                            <Link to={this.props.redirectLink} className='link'>{this.props.redirectMessage}</Link>
                            <ToastsContainer store={ToastsStore} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Form;