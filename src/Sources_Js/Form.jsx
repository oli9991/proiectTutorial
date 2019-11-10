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
    // modific valoarea showPassword care decide daca utilizatorul poate sau nu sa vada parola
    handleClickShowPassword() {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }
    // modific valoarea parolei / emailului 
    // depinde de eveniment (parametrul functiei event)
    // puteti sa faceti functie separata pentru fiecare variabila, dar daca avem 100 elemente in state...nu prea merge

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
   
    render() {
        // daca e cineva logat atunci => redirectioneaza la Pagina principala cand avem utilizator (AllPhotos)
        if (this.props.isLogged === true) {
            return <Redirect to='/dashboard' />
        } else {
            // altfel avem pagina cu formularul
            return (
                // 3 div-uri pentru efectul de umbra 
                <div className='container-form'>
                    <div className='box-form'>
                        {/* inimioara de sus e un link */}
                        {/* Redirect, Link, Route, Switch, Router sunt din acelasi pachet */}
                        <Link to='/'> < FaHeart color="#fb8d98" size={45} style={{ marginLeft: '5%' }}></FaHeart></Link>
                        {/* un div pentru formular + mesaj redirectionare*/}
                        <div className="content-form">
                            {/* div pentru formular */}
                            <div className='form'>
                                <TextField
                                    className="text-field"
                                    label="Email*"
                                    variant="outlined"
                                    name='email'
                                    value={this.state.email} //trebuie sa avem o valoare, asta apare in casuta cand scriem ceva
                                    onChange={(e) => this.onChangeHandler(e)} //cand se modifica valoarea (cand modificam de la tastatura) => trebuie sa modificat cu setState
                                />
                                <TextField
                                    className="text-field"
                                    variant="outlined"
                                    // type = 'password' va face parola cu bulinute 
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    label="Password*"
                                    name='password'
                                    value={this.state.password}
                                    onChange={(e) => this.onChangeHandler(e)}
                                    // pentru iconul de la parola pe care apesi sa schimbi cum iti apare parola
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
                                    onClick={() => this.props.request(this.state.email, this.state.password)} //cand se apasa se apeleaza request care poate fi login sau register (in functie de ruta)
                                    color="secondary"
                                    // inline CSS
                                    style={{ height: '5vh', width: '80%' }}> 
                                    {/* rendare conditionala (Conditional Rendering) */}
                                    {(this.props.redirectLink === '/login') ? 'Register' : 'Login'}
                                </Button>
                            </div>
                            {/* linkul de redirectionare */}
                            <Link to={this.props.redirectLink} className='link'>{this.props.redirectMessage}</Link>
                            {/* ca si toastul de pe Android (mesajul de jos care apare la unele aplicatii si tine cateva secunde) */}
                            <ToastsContainer store={ToastsStore} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Form;