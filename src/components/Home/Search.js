import { useState } from 'react';
import Header from "../Header"
import Button from "../Inputs/Button"
import Results from "../Results/Results"
import { useSelector } from 'react-redux';
import { getResults } from '../../backend/discogsMethods';
import { selectorUserName } from '../../backend/userSlice';

const Search = () => {

    const [results, setResults] = useState(null);
    const userName = useSelector(selectorUserName);

    const [query, setQuery] = useState([])

    const handleChange = (e) => {
        const { value } = e.target;
        setQuery(value)
    }

    const handleSearch = () => {
        getResults(query, 1)
            .then((res) => {
                console.log(res)
                setResults(res)
            })
    }

    if (userName && results) {
        return (
            <div className="Search">
                <Header />
                <div className="container">
                    <div className="row centered">
                        <div className="col-4">
                            <h3>
                                We are looking for... <span>{query}</span>
                            </h3>
                        </div>
                    </div>
                    <div className="row centered">
                        <div className="col-6">
                            <input className='InputText' value={query} onChange={handleChange} type='text' name='searchBox' placeholder='' />
                        </div>
                    </div>
                    <div className="row centered">
                        <div className="col-2">
                            <Button type='primary' message='Search' handler={handleSearch} />
                        </div>
                    </div>
                    <Results results={results.results} pagination={results.pagination} query={query} setResults={setResults} />
                </div>
            </div>
        )
    } else {
        return (
            <div className='Search'>
                <Header />
                <div className="container">
                    <div className="row centered">
                        <div className="col-4 text-centered">
                            <h2>
                                Welcome back <span>{userName}.</span>
                                <br />
                                What you wanna search today?
                            </h2>
                        </div>
                    </div>
                    <div className="row centered">
                        <div className="col-6">
                            <input className='InputText' value={query} onChange={handleChange} type='text' name='searchBox' placeholder='' />
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
