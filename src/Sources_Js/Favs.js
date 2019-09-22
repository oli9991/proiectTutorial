import React from 'react';
import '../Sources_CSS/Favs.css';
import { FaRegHeart} from 'react-icons/fa';
import Menu from './Menu';
import { Link } from 'react-router-dom';

class Favs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='container-favs'>
                <div className='box-favs'>
                    <Link to='/'> < FaRegHeart color="#fb8d98" size={45} style={{ marginLeft: '5%' }}></FaRegHeart></Link>
                    <Menu
                        isLogged={this.props.isLogged}
                        logout={this.props.logout}
                        login={this.props.login}
                    ></Menu>
                    <div className="content-favs">
                    Favs
                    </div>
                </div>
            </div>
        );
    }
}

export default Favs;