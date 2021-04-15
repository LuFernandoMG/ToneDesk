import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import collection from '../assets/icons/folder.svg';
import wishlist from '../assets/icons/heart.svg';
import logout from '../assets/icons/logout.svg';

const Header = () => {

    if (false) {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <Link to='/'>
                                <h1 id="logo" className="small">ToneDesk</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Link to='/'>
                            <h1 id="logo" className="small">ToneDesk</h1>
                        </Link>
                    </div>
                    <div className="col-4">
                        <nav>
                            <Link to='/collection'>
                                <img src={collection} alt="" />
                            </Link>
                            <Link to='/wishlist'>
                                <img src={wishlist} alt="" />
                            </Link>
                            <Link to='/logout'>
                                <img src={logout} alt="" />
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;