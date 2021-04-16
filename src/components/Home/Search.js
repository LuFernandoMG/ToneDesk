import Header from "../Header"
import Button from "../Inputs/Button"
import Results from "../Results/Results"
import { useSelector } from 'react-redux';
import { selectorResults } from '../../backend/searchSlice';
import { selectorUserName } from '../../backend/userSlice';

const Search = () => {
    
    const userName = useSelector(selectorUserName);
    const results = useSelector(selectorResults);

    const handleSearch = () => {
        console.log('I did a search')
    }


    if (userName && results) {
        return (
            <div className="Search">
                <Header />
                <div className="container">
                    <div className="row centered">
                        <div className="col-4">
                            <h2>
                                We are looking for... <span>query</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row centered">
                        <div className="col-6">
                            <input className='InputText' type='text' name='searchBox' placeholder='' />
                        </div>
                    </div>
                    <div className="row centered">
                        <div className="col-2">
                            <Button type='primary' message='Search' handler={handleSearch} />
                        </div>
                    </div>
                    <Results />
                </div>
            </div>
        )
    } else {
        return (
            <div className='Search'>
                <Header />
                <div className="container">
                    <div className="row centered">
                        <div className="col-4">
                            <h2>
                                Welcome back <span>{userName}.</span>
                                <br />
                            What you wanna search today?
                        </h2>
                        </div>
                    </div>
                    <div className="row centered">
                        <div className="col-6">
                            <input className='InputText' type='text' name='searchBox' placeholder='' />
                        </div>
                    </div>
                    <div className="row centered">
                        <div className="col-2">
                            <Button type='primary' message='Search' handler={handleSearch} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;
