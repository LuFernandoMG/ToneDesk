import { Link } from 'react-router-dom';
import { auth } from '../backend/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogOutState, selectorUserName } from '../backend/userSlice';
import '../assets/styles/components/Header.scss';
import collection from '../assets/icons/folder.svg';
import wishlist from '../assets/icons/heart.svg';
import logout from '../assets/icons/logout.svg';

const Header = () => {

    const dispatch = useDispatch();
    const userName = useSelector(selectorUserName);

    const handleSignOut = () => {
        auth.signOut().then(() => {
            dispatch(setUserLogOutState());
        }).catch((err) => console.error(err.message));
    }

    if (!userName) {
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
                            <Link to='' onClick={handleSignOut}>
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