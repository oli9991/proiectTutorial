import React from 'react';
import '../Sources_CSS/Profile.css';
import { FaRegHeart } from 'react-icons/fa';
import Menu from './Menu';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'EMilson',
            lastName: 'Emily',
            email: 'emily@gmail.com',
            phone: '0746364728'
        }
    }

    render() {
        return (
            <div className='container-profile'>
                <div className='box-profile'>
                    <Link to='/'> < FaRegHeart color="#fb8d98" size={45} style={{ marginLeft: '5%' }}></FaRegHeart></Link>
                    <Menu
                        isLogged={this.props.isLogged}
                        logout={this.props.logout}
                    ></Menu>
                    <div className="content-profile">
                        <h1 style={{ margin: '2%', color: '#553D67' }}>
                            ACCOUNT INFO
                    </h1>
                        <div style={{ display: 'flex', margin: '2%', flexDirection: 'column', color: '#553D67' }}>
                            <p>
                                Name : {this.state.firstName} {this.state.lastName}
                            </p>
                            <p>
                                Email : {this.state.email}
                            </p>
                            <p>
                                Phone : {this.state.phone}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;