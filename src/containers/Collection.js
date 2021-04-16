import Header from "../components/Header"
import PersonalList from "../components/PersonalList.js"
import folder from '../assets/icons/folder.svg';
import Results from "../components/Results/Results";

const Collection = () => {

    return (
        <div className="Collection">
            <Header />
            <PersonalList img={folder} title='My Collection' />
            <Results />
        </div>
    )
}

export default Collection;
