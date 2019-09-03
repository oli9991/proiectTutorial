import React from 'react';
import '../Sources_CSS/Login.css';
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

class Login extends React.Component {
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
    login() {
        this.props.login();
        this.props.history.push('/dashboard');
    }
    render() {
        return (
            <div className='container-login'>
                <div className='box-login'>
                    <Link to='/'> < FaRegHeart color="#fb8d98" size={45} style={{ marginLeft: '5%' }}></FaRegHeart></Link>
                    <Menu
                        isLogged={this.props.isLogged}
                        logout={this.props.logout}
                    >
                    </Menu>
                    <div className="content-login">
                        <div className='form-login'>
                            <TextField
                                className="text-field"
                                label="email"
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
                                label="Password"
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
                            <Button
                                onClick={() => this.login()}
                                color="secondary"
                                style={{ height: '5vh', width: '80%' }}>
                                Login
                            </Button>
                        </div>
                        <Link to='/register'>You don't have an account? Register now</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;