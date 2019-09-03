import { type } from "os";

import React from 'react';
import '../Sources_CSS/Register.css';
import {
    TextField,
    InputAdornment,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { FaRegHeart } from 'react-icons/fa';
import Menu from './Menu';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            firstName: '',
            lastName: '',
            phone: '',
            password: '',
            email: '',
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
        return (
            <div className='container-register'>
                <div className='box-register'>
                    <Link to='/'> < FaRegHeart color="#fb8d98" size={45} style={{ marginLeft: '5%' }}></FaRegHeart></Link>
                    <Menu
                        isLogged={this.props.isLogged}
                        logout={this.props.logout}
                    ></Menu>
                    <div className="content-register">
                        <div className='form-register'>
                            <div className="name-fields">
                                <TextField
                                    className="text-field"
                                    label="First name*"
                                    variant="outlined"
                                    type='text'
                                    id="mui-theme-provider-outlined-input"
                                    name='firstName'
                                    value={this.state.firstName}
                                    onChange={(e) => this.onChangeHandler(e)}
                                />
                                <TextField
                                    className="text-field"
                                    label="Last name*"
                                    variant="outlined"
                                    id="mui-theme-provider-outlined-input"
                                    name='lastName'
                                    value={this.state.lastName}
                                    onChange={(e) => this.onChangeHandler(e)}
                                />
                            </div>
                            <TextField
                                className="text-field"
                                label="Email*"
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                name='email'
                                value={this.state.email}
                                onChange={(e) => this.onChangeHandler(e)}
                            />
                            <TextField
                                id="outlined-adornment-password"
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
                                            // onMouseDown={handleMouseDownPassword}
                                            >
                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                className="text-field"
                                label="Phone*"
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                type="number"
                                name='phone'
                                value={this.state.phone}
                                onChange={(e) => this.onChangeHandler(e)}
                            />
                            <Button color="secondary" style={{ height: '5vh', width: '80%' }}>
                                Register
                            </Button>
                        </div>
                        <Link to='/login'>You already have an account? Login</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;