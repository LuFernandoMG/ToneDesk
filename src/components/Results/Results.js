import { useState } from 'react';
import Pagination from './Pagination';
import ListContainer from './ListContainer';
import ResultsToggle from './ResultsToggle';
import GridContainer from './GridContiner';

const Results = ({ results, query, pagination, selection }) => {

    const [type, setType] = useState('list')

    const handleType = (e) => {
        setType(e)
    }

    if (type === 'list' && results.length > 0) {
        return (
            <div className="Results">
                <ResultsToggle type={type} handler={handleType} />
                <ListContainer results={results} />
                {pagination ? <Pagination data={pagination} query={query} /> : null}
            </div>
        )
    } else if (type === 'grid' && results.length > 0) {
        return (
            <div className="Results">
                <ResultsToggle type={type} handler={handleType} />
                <GridContainer results={results} />
                {pagination ? <Pagination data={pagination} query={query} /> : null}
            </div>
        )
    } else if (selection) {
        return (
            <div className="Results">
                <div className="container">
                    <div className="row centered">
                        <div className="col-6">
                            <h2>
                                Wow... Looks like you haven't <span>saved anything</span> here. How about looking for some music?
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="Results">
                <div className="container">
                    <div className="row centered">
                        <div className="col-6">
                            <h2>
                                Wow... There seem to be <span>no results</span> for that search. What if you try something else?
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results;