import github from '../assets/icons/github.svg';
import twitter from '../assets/icons/twitter.svg';
import { useSelector } from 'react-redux';
import '../assets/styles/components/Footer.scss';

const Footer = () => {

    const user = useSelector(state => state.user)

    if (!user.name) {
        return null
    } else {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <h1 id="logo" className="small">ToneDesk</h1>
                        </div>
                        <div className="col-4">
                            <div className="left">
                                <h3>
                                    Designed and developed by
                                    <br />
                                    <span>Luis Fernando Méndez</span>
                                </h3>
                            </div>
                            <div className="right">
                                <a href="http://github.com/lufernandomg" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="" />
                                </a>
                                <a href="http://twitter.com/mgluisfernando" target="_blank" rel="noopener noreferrer">
                                    <img src={twitter} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;