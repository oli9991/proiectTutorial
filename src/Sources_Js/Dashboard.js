import React from 'react';
import { Link } from 'react-router-dom';
import '../Sources_CSS/Dashboard.css';
import {
    InputBase,
    TextField
} from '@material-ui/core';
import { FaRegHeart, FaSearch } from 'react-icons/fa';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component: 'allphotos'
        }
        this.changeComponent = this.changeComponent.bind(this);
    }
    changeComponent(comp) {
        this.setState({
            component: comp
        })
        console.log(this.state.component);
    }
    render() {
        const loginComponent = (
            <div className='form-login'>
                <TextField
                    // className={classes.margin}
                    label="email"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                />
            </div>
        );
        const allphotos = (
            <div>
                all photos
            </div>
        );
        return (
            <div className='container'>
                <div className='box'>
                    < FaRegHeart color="#fb8d98" size={45} style={{ marginLeft: '5%' }}></FaRegHeart>
                    <div className='menu'>
                        <Link className="link" onClick={(e) => this.changeComponent("allphotos")}>ALL PHOTOS</Link>
                        <Link className="link" onClick={(e) => this.changeComponent("favs")}>YOUR FAVS</Link>
                        <Link className="link" onClick={(e) => this.changeComponent("profile")}>PROFILE</Link>
                        <Link className="link" onClick={(e) => this.changeComponent("login")}>{this.props.message}</Link>
                        <div className="searchbar">
                            <InputBase
                                style={{ width: '90%' }}
                                placeholder="Search photo..."
                                inputProps={{ 'aria-label': 'Search' }}
                            />
                            <FaSearch color="#fdbfc5"> </FaSearch>
                        </div>
                    </div>
                    <div className="content">
                        {() => {
                            switch (this.state.component) {
                                case 'allphotos':
                                    return allphotos;
                                case 'login':
                                    return loginComponent;
                                default:
                                    return allphotos;
                            }
                        }
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;