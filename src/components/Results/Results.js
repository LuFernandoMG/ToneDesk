import { useState } from 'react';
import Pagination from './Pagination';
import ListContainer from './ListContainer';
import ResultsToggle from './ResultsToggle';
import GridContainer from './GridContiner';

const Results = ({ results, query, setResults, pagination, selection }) => {

    const [type, setType] = useState('list')

    const handleType = (e) => {
        setType(e)
    }

    if (type === 'list' && results.length > 0) {
        return (
            <div className="Results">
                <ResultsToggle type={type} handler={handleType} />
                <ListContainer results={results} />
                {pagination ? <Pagination data={pagination} query={query} handler={setResults} /> : null}
            </div>
        )
    } else if (type === 'grid' && results.length > 0) {
        return (
            <div className="Results">
                <ResultsToggle type={type} handler={handleType} />
                <GridContainer results={results} />
                {pagination ? <Pagination data={pagination} query={query} handler={setResults} /> : null}
            </div>
        )
    } else if (selection) {
        return (
            <div className="Results">
                <div className="container">
                    <div className="row centered">
                        <div className="col-6">
                            <h2>
                                Vaya... Parece que no has <span>guardado nada</span> aquí ¿Qué tal si buscas algo de música?
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