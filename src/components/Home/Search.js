import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResultsInfo } from '../../backend/statusSlice';
import { selectorUserName } from '../../backend/userSlice';
import Button from "../Inputs/Button"
import Results from "../Results/Results"
import Loader from '../Loader'
import Fatal from '../Fatal'

const Search = () => {

    const dispatch = useDispatch();
    const status = useSelector(state => state.status)
    const userName = useSelector(selectorUserName);

    const [query, setQuery] = useState([])

    const handleChange = (e) => {
        const { value } = e.target;
        setQuery(value)
    }

    const handleSearch = () => {
        const arr = [query, 1]
        dispatch(getResultsInfo(arr))
    }

    if (status.loading) {
        return <Loader />
    }

    if (status.error) {
        return <Fatal message={status.error} />
    }

    if (userName && status.results ? status.results.results : null) {
        return (
            <>
                <div className="Search">
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
                        <Results results={status.results.results} pagination={status.results.pagination} query={query} />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='Search'>
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
            </>
        )
    }
}

export default Search;
