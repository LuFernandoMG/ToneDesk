import Carousel from '../Carousel';
import { useHistory } from 'react-router-dom';
import Button from '../Inputs/Button';
import '../../assets/styles/containers/Landing.scss';

const Landing = () => {

    const history = useHistory();

    const handleLogin = () => {
        history.push('/login')
    }

    // let lastScroll = 0;

    // const handleScroll = () => {
    //     const first = document.getElementById('first')
    //     const second = document.getElementById('second')
    //     let st = window.pageYOffset || document.documentElement.scrollTop;
    //     console.log('Catching scroll')
    //     if (st > lastScroll) {
    //         console.log('scroll down and first is: ', first);
    //     } else {
    //         console.log('scroll up and second is: ', second)
    //     }

    //     lastScroll = st <= 0 ? 0 : st;
    // }

    // window.addEventListener('scroll', handleScroll())

    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <Carousel />
                </div>
                <div className="col-3" id='landing'>
                    <div id='first' className="landing__initial hidden">
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
                    {/* <div id='second' className="landing__info">
                        <h2 className="landing__info--title">
                            We live for music
                        </h2>
                        <small className='landing__info--small'>Enjoy, it's open-source 😉</small>
                        <p className="info--description">This project is a challenge for B4B, designed and developed by <span>Luis Fernando Méndez</span></p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Landing;