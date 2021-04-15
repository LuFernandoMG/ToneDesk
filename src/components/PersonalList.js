import InputText from "./Inputs/InputText"
import search from '../assets/icons/search.svg';
import '../assets/styles/components/PersonalList.scss';

const PersonalList = ({ img, title }) => {

    const handleSearch = () => {
        console.log('Hice click')
    }

    return (
        <div className="row centered">
            <div className="col-6 PersonalList">
                <div className="PersonalList__title">
                    <img src={img} alt={title} />
                    <h2>{title}</h2>
                </div>
                <div className="PersonalList__search">
                    <div className="wrapper">
                        <button type='button' onClick={handleSearch}>
                            <img src={search} alt={`Search on ${title}`} />
                        </button>
                        <InputText type='text' name='search' placeholder='Search...' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalList;