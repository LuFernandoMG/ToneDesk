import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from "../components/Header";
import PersonalList from "../components/PersonalList.js";
import folder from '../assets/icons/folder.svg';
import Results from "../components/Results/Results";
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Fatal from '../components/Fatal';

const Collection = () => {

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
            <div className="Collection">
                <PersonalList img={folder} title='My Collection' />
                <div className="container">
                    <Results results={user.collection} selection={true} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Collection;
