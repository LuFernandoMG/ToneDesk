import { useSelector } from 'react-redux';
import { selectorUserName } from '../backend/userSlice';
import Search from '../components/Home/Search';
import Landing from '../components/Home/Landing';

const Home = () => {

    const userName = useSelector(selectorUserName);

    if (userName) {
        return (
            <Search />
        )
    } else {
        return (
            <Landing />
        )
    }
}

export default Home;
