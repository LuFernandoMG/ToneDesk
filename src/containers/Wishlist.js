import { useSelector } from 'react-redux';
import Header from "../components/Header";
import PersonalList from "../components/PersonalList.js";
import heart from '../assets/icons/heart.svg';
import Results from "../components/Results/Results";
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Fatal from '../components/Fatal';
import { Redirect } from 'react-router';

const Wishlist = () => {

    const user = useSelector(state => state.user)
    const status = useSelector(state => state.status)

    if (status.loading) {
        return (
            <Loader />
        )
    }

    if (status.error) {
        return (
            <Fatal message={status.error} />
        )
    }

    if (!user.name) {
        return (
            <Redirect to='/' />
        )
    }

    return (
        <>
            <Header />
            <div className="Wishlist">
                <PersonalList img={heart} title='My Wishlist' />
                <div className="container">
                    <Results results={user.wishlist} selection={true} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Wishlist;
