import { useSelector } from 'react-redux';
import Header from "../components/Header";
import PersonalList from "../components/PersonalList.js";
import heart from '../assets/icons/heart.svg';
import Results from "../components/Results/Results";

const Wishlist = () => {

    const user = useSelector(state => state.user)

    return (
        <div className="Wishlist">
            <Header />
            <PersonalList img={heart} title='My Wishlist' />
            <div className="container">
            <Results results={user.wishlist} selection={true} />
            </div>
        </div>
    )
}

export default Wishlist;
