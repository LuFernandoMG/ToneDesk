import CardElement from './CardElement';
import ListContainer from './ListContainer';
import ListElement from './ListElement';
import ResultsToggle from './ResultsToggle';
import { useSelector } from 'react-redux';
import { selectorResults, selectorType } from '../../backend/searchSlice';

const Results = () => {
    
    const results = useSelector(selectorResults);
    const type = useSelector(selectorType);

    if (type === 'list' && results) {
        return (
            <div className="Results">
                <ResultsToggle />
                <ListContainer>
                    <ListElement results={results} />
                </ListContainer>
            </div>
        )
    } else if (type === 'grid' && results) {
        return (
            <div className="Results">
                <ResultsToggle />
                <CardElement results={results} />
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