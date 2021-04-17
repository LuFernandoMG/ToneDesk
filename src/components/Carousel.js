import album1 from '../assets/img/album1.jpg';
import album2 from '../assets/img/album2.png';
import album3 from '../assets/img/album3.jpg';
import album4 from '../assets/img/album4.jpg';
import album5 from '../assets/img/album5.jpg';
import album6 from '../assets/img/album6.jpg';
import album7 from '../assets/img/album7.jpg';
import album8 from '../assets/img/album8.jpg';
import album9 from '../assets/img/album9.jpg';
import album10 from '../assets/img/album10.jpg';
import album11 from '../assets/img/album11.jpg';
import album12 from '../assets/img/album12.jpg';
import album13 from '../assets/img/album13.jpg';
import album14 from '../assets/img/album14.jpg';
import album15 from '../assets/img/album15.jpg';
import album16 from '../assets/img/album16.jpeg';
import album17 from '../assets/img/album17.jpg';
import album18 from '../assets/img/album18.jpg';
import album19 from '../assets/img/album19.png';
import album20 from '../assets/img/album20.jpg';
import album21 from '../assets/img/album21.jpg';
import album22 from '../assets/img/album22.jpg';
import album23 from '../assets/img/album23.jpg';
import album24 from '../assets/img/album24.jpg';
import album25 from '../assets/img/album25.jpg';
import Slider from 'infinite-react-carousel';
import '../assets/styles/components/Slider.scss';
import { useSelector } from 'react-redux';

const Carousel = () => {

    const user = useSelector(state => state.user)

    if (user.name) {
        return (
            <div className="Slider">
                soy un carousel logueado
            </div>
        )
    } else {
        return (
            <div className="Slider">
                <Slider autoplay={true} className='slider__container' slidesToShow={9} autoplaySpeed={1300} duration={1500} arrows={false} adaptativeHeight={false}>
                    <img className='slider__item' src={album1} alt=""/>
                    <img className='slider__item' src={album2} alt=""/>
                    <img className='slider__item' src={album3} alt=""/>
                    <img className='slider__item' src={album4} alt=""/>
                    <img className='slider__item' src={album5} alt=""/>
                    <img className='slider__item' src={album6} alt=""/>
                    <img className='slider__item' src={album7} alt=""/>
                    <img className='slider__item' src={album8} alt=""/>
                    <img className='slider__item' src={album9} alt=""/>
                    <img className='slider__item' src={album10} alt=""/>
                    <img className='slider__item' src={album11} alt=""/>
                    <img className='slider__item' src={album12} alt=""/>
                    <img className='slider__item' src={album13} alt=""/>
                    <img className='slider__item' src={album14} alt=""/>
                    <img className='slider__item' src={album15} alt=""/>
                    <img className='slider__item' src={album16} alt=""/>
                    <img className='slider__item' src={album17} alt=""/>
                    <img className='slider__item' src={album18} alt=""/>
                    <img className='slider__item' src={album19} alt=""/>
                    <img className='slider__item' src={album20} alt=""/>
                    <img className='slider__item' src={album21} alt=""/>
                    <img className='slider__item' src={album22} alt=""/>
                    <img className='slider__item' src={album23} alt=""/>
                    <img className='slider__item' src={album24} alt=""/>
                    <img className='slider__item' src={album25} alt=""/>
                </Slider>
                <Slider autoplay={true} className='slider__container' slidesToShow={9} autoplaySpeed={1300} duration={1500} arrows={false} adaptativeHeight={false}>
                    <img className='slider__item' src={album1} alt=""/>
                    <img className='slider__item' src={album13} alt=""/>
                    <img className='slider__item' src={album17} alt=""/>
                    <img className='slider__item' src={album5} alt=""/>
                    <img className='slider__item' src={album4} alt=""/>
                    <img className='slider__item' src={album6} alt=""/>
                    <img className='slider__item' src={album11} alt=""/>
                    <img className='slider__item' src={album8} alt=""/>
                    <img className='slider__item' src={album12} alt=""/>
                    <img className='slider__item' src={album9} alt=""/>
                    <img className='slider__item' src={album10} alt=""/>
                    <img className='slider__item' src={album18} alt=""/>
                    <img className='slider__item' src={album14} alt=""/>
                    <img className='slider__item' src={album3} alt=""/>
                    <img className='slider__item' src={album15} alt=""/>
                    <img className='slider__item' src={album7} alt=""/>
                    <img className='slider__item' src={album16} alt=""/>
                    <img className='slider__item' src={album2} alt=""/>
                    <img className='slider__item' src={album20} alt=""/>
                    <img className='slider__item' src={album24} alt=""/>
                    <img className='slider__item' src={album21} alt=""/>
                    <img className='slider__item' src={album22} alt=""/>
                    <img className='slider__item' src={album25} alt=""/>
                    <img className='slider__item' src={album23} alt=""/>
                    <img className='slider__item' src={album19} alt=""/>
                </Slider>
                <Slider autoplay={true} className='slider__container' slidesToShow={9} autoplaySpeed={1300} duration={1500} arrows={false} adaptativeHeight={false}>
                    <img className='slider__item' src={album1} alt=""/>
                    <img className='slider__item' src={album22} alt=""/>
                    <img className='slider__item' src={album8} alt=""/>
                    <img className='slider__item' src={album3} alt=""/>
                    <img className='slider__item' src={album4} alt=""/>
                    <img className='slider__item' src={album7} alt=""/>
                    <img className='slider__item' src={album2} alt=""/>
                    <img className='slider__item' src={album9} alt=""/>
                    <img className='slider__item' src={album5} alt=""/>
                    <img className='slider__item' src={album6} alt=""/>
                    <img className='slider__item' src={album15} alt=""/>
                    <img className='slider__item' src={album10} alt=""/>
                    <img className='slider__item' src={album13} alt=""/>
                    <img className='slider__item' src={album14} alt=""/>
                    <img className='slider__item' src={album19} alt=""/>
                    <img className='slider__item' src={album11} alt=""/>
                    <img className='slider__item' src={album20} alt=""/>
                    <img className='slider__item' src={album17} alt=""/>
                    <img className='slider__item' src={album12} alt=""/>
                    <img className='slider__item' src={album21} alt=""/>
                    <img className='slider__item' src={album23} alt=""/>
                    <img className='slider__item' src={album18} alt=""/>
                    <img className='slider__item' src={album25} alt=""/>
                    <img className='slider__item' src={album24} alt=""/>
                    <img className='slider__item' src={album16} alt=""/>
                </Slider>
                <Slider autoplay={true} className='slider__container' slidesToShow={9} autoplaySpeed={1300} duration={1500} arrows={false} adaptativeHeight={false}>
                    <img className='slider__item' src={album1} alt=""/>
                    <img className='slider__item' src={album3} alt=""/>
                    <img className='slider__item' src={album7} alt=""/>
                    <img className='slider__item' src={album4} alt=""/>
                    <img className='slider__item' src={album6} alt=""/>
                    <img className='slider__item' src={album2} alt=""/>
                    <img className='slider__item' src={album17} alt=""/>
                    <img className='slider__item' src={album8} alt=""/>
                    <img className='slider__item' src={album25} alt=""/>
                    <img className='slider__item' src={album10} alt=""/>
                    <img className='slider__item' src={album11} alt=""/>
                    <img className='slider__item' src={album12} alt=""/>
                    <img className='slider__item' src={album13} alt=""/>
                    <img className='slider__item' src={album14} alt=""/>
                    <img className='slider__item' src={album19} alt=""/>
                    <img className='slider__item' src={album9} alt=""/>
                    <img className='slider__item' src={album16} alt=""/>
                    <img className='slider__item' src={album18} alt=""/>
                    <img className='slider__item' src={album5} alt=""/>
                    <img className='slider__item' src={album20} alt=""/>
                    <img className='slider__item' src={album21} alt=""/>
                    <img className='slider__item' src={album22} alt=""/>
                    <img className='slider__item' src={album23} alt=""/>
                    <img className='slider__item' src={album24} alt=""/>
                    <img className='slider__item' src={album15} alt=""/>
                </Slider>
                <Slider autoplay={true} className='slider__container' slidesToShow={9} autoplaySpeed={1300} duration={1500} arrows={false} adaptativeHeight={false}>
                    <img className='slider__item' src={album6} alt=""/>
                    <img className='slider__item' src={album3} alt=""/>
                    <img className='slider__item' src={album7} alt=""/>
                    <img className='slider__item' src={album4} alt=""/>
                    <img className='slider__item' src={album17} alt=""/>
                    <img className='slider__item' src={album9} alt=""/>
                    <img className='slider__item' src={album19} alt=""/>
                    <img className='slider__item' src={album1} alt=""/>
                    <img className='slider__item' src={album2} alt=""/>
                    <img className='slider__item' src={album8} alt=""/>
                    <img className='slider__item' src={album25} alt=""/>
                    <img className='slider__item' src={album2} alt=""/>
                    <img className='slider__item' src={album9} alt=""/>
                    <img className='slider__item' src={album16} alt=""/>
                    <img className='slider__item' src={album12} alt=""/>
                    <img className='slider__item' src={album10} alt=""/>
                    <img className='slider__item' src={album14} alt=""/>
                    <img className='slider__item' src={album23} alt=""/>
                    <img className='slider__item' src={album11} alt=""/>
                    <img className='slider__item' src={album13} alt=""/>
                    <img className='slider__item' src={album18} alt=""/>
                    <img className='slider__item' src={album19} alt=""/>
                    <img className='slider__item' src={album9} alt=""/>
                    <img className='slider__item' src={album5} alt=""/>
                    <img className='slider__item' src={album21} alt=""/>
                    <img className='slider__item' src={album22} alt=""/>
                    <img className='slider__item' src={album20} alt=""/>
                    <img className='slider__item' src={album24} alt=""/>
                    <img className='slider__item' src={album15} alt=""/>
                </Slider>
                <Slider autoplay={true} className='slider__container' slidesToShow={9} autoplaySpeed={1300} duration={1500} arrows={false} adaptativeHeight={false}>
                    <img className='slider__item' src={album1} alt=""/>
                    <img className='slider__item' src={album3} alt=""/>
                    <img className='slider__item' src={album7} alt=""/>
                    <img className='slider__item' src={album4} alt=""/>
                    <img className='slider__item' src={album6} alt=""/>
                    <img className='slider__item' src={album2} alt=""/>
                    <img className='slider__item' src={album17} alt=""/>
                    <img className='slider__item' src={album8} alt=""/>
                    <img className='slider__item' src={album25} alt=""/>
                    <img className='slider__item' src={album10} alt=""/>
                    <img className='slider__item' src={album11} alt=""/>
                    <img className='slider__item' src={album12} alt=""/>
                    <img className='slider__item' src={album13} alt=""/>
                    <img className='slider__item' src={album14} alt=""/>
                    <img className='slider__item' src={album19} alt=""/>
                    <img className='slider__item' src={album9} alt=""/>
                    <img className='slider__item' src={album16} alt=""/>
                    <img className='slider__item' src={album18} alt=""/>
                    <img className='slider__item' src={album5} alt=""/>
                    <img className='slider__item' src={album20} alt=""/>
                    <img className='slider__item' src={album21} alt=""/>
                    <img className='slider__item' src={album22} alt=""/>
                    <img className='slider__item' src={album23} alt=""/>
                    <img className='slider__item' src={album24} alt=""/>
                    <img className='slider__item' src={album15} alt=""/>
                </Slider>
            </div>
        )
    }
}

export default Carousel;