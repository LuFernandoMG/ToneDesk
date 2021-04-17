import { useState } from 'react';
import Pagination from './Pagination';
import ListContainer from './ListContainer';
import ResultsToggle from './ResultsToggle';
import GridContainer from './GridContiner';

const Results = ({ results, query, setResults }) => {

    const [type, setType] = useState('list')

    const handleType = (e) => {
        setType(e)
    }

    if (type === 'list' && results.results.length > 0) {
        return (
            <div className="Results">
                <ResultsToggle type={type} handler={handleType} />
                <ListContainer results={results} />
                <Pagination data={results.pagination} query={query} handler={setResults} />
            </div>
        )
    } else if (type === 'grid' && results.results.length > 0) {
        return (
            <div className="Results">
                <ResultsToggle type={type} handler={handleType} />
                <GridContainer results={results} />
                <Pagination data={results.pagination} query={query} handler={setResults} />
            </div>
        )
    } else {
        return (
            <div className="Results">
                <div className="container">
                    <div className="row centered">
                        <div className="col-6">
                            <h2>
                                Vaya... Parece que no hay <span>resultados</span> por esa busqueda ¿Y si pruebas otra cosa?
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results;