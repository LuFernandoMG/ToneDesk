import Header from "../components/Header"
import PersonalList from "../components/PersonalList.js"
import heart from '../assets/icons/heart.svg';
import Results from "../components/Results/Results";

const Wishlist = () => {
    return (
        <div className="Wishlist">
            <Header />
            <PersonalList img={heart} title='My Wishlist' />
            <Results />
        </div>
    )
}

export default Wishlist;
