import { useSelector } from 'react-redux';
import { selectorUserName } from '../backend/userSlice';
import Search from '../components/Home/Search';
import Landing from '../components/Home/Landing';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {

    const userName = useSelector(selectorUserName);

    if (userName) {
        return (
            <>
                <Header />
                <Search />
                <Footer />
            </>
        )
    } else {
        return (
            <Landing />
        )
    }
}

export default Home;
