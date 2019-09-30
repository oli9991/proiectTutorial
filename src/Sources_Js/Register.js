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
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastsContainer, ToastsStore } from 'react-toasts';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            password: '',
            email: '',
        }
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.register = this.register.bind(this);
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
    }
    async register() {
        if (this.state.email === '' || this.state.password === '') {
            alert('pss...ai uitat sa completezi campuri');
        } else {
            try {
                const response = await fetch('http://3.19.223.148:3000/api/auth/inregistrare',
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            "email": this.state.email,
                            "password": this.state.password
                        }),
                    });
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                ToastsStore.success("You account is ready to use!");
                ToastsStore.info(`You can log in now`);
                this.setState({
                    email: " ",
                    password: '',
                })
            } catch (error) {
                console.log(error);
                alert('error');
            }
        }
    }

    render() {
        return (
            <div className='container-register'>
                <div className='box-register'>
                    <Link to='/'> < FaHeart color="#fb8d98" size={45} style={{ marginLeft: '5%' }}></FaHeart></Link>
                    <div className="content-register">
                        <div className='form-register'>
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
                                            >
                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button
                                onClick={(e) => this.register()}
                                color="secondary" style={{ height: '5vh', width: '80%' }}>
                                Register
                            </Button>
                        </div>
                        <Link to='/login'>You already have an account? Login</Link>
                    </div>
                    <ToastsContainer store={ToastsStore} />
                </div>
            </div>
        );
    }
}

export default Register;