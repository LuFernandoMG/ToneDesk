import { useState } from 'react';
import left from '../../assets/img/image__left.png';
import { useHistory } from 'react-router-dom';
import Button from '../Inputs/Button';
import '../../assets/styles/containers/Landing.scss';

const Landing = () => {

    const [scroll, setScroll] = useState(false)
    const history = useHistory();
    const handleLogin = () => {
        history.push('/login')
    }

    document.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    });

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className='back'></div>
                        <img src={left} alt="Welcome to ToneDesk" className='image-landing' />
                    </div>
                    <div className="col-3" id='landing'>
                        <div id='first' className={`landing__initial ${scroll ? 'hidden' : ''}`}>
                            <h1 id="logo" className="big">
                                ToneDesk
                        </h1>
                            <h2 className='landing__initial--title'>Take control over the music you love</h2>
                            <div className="row right">
                                <div className="col-4">
                                    <Button type='primary' message="Let's rock baby" handler={handleLogin} />
                                </div>
                            </div>
                        </div>
                        <div id='second' className={`landing__info ${scroll ? '' : 'hidden'}`}>
                            <h2 className="landing__info--title">
                                We live for music
                        </h2>
                            <small className='landing__info--small'>Enjoy, it's open-source 😉</small>
                            <p className="info--description">This project is a challenge for B4B, designed and developed by <span>Luis Fernando Méndez</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;