import { useSelector } from 'react-redux';
import Header from "../components/Header";
import PersonalList from "../components/PersonalList.js";
import folder from '../assets/icons/folder.svg';
import Results from "../components/Results/Results";

const Collection = () => {

    const user = useSelector(state => state.user)

    return (
        <div className="Collection">
            <Header />
            <PersonalList img={folder} title='My Collection' />
            <div className="container">
                <Results results={user.collection} selection={true} />
            </div>
        </div>
    )
}

export default Collection;
