import CardElement from './CardElement';
import ListContainer from './ListContainer';
import ListElement from './ListElement';
import ResultsToggle from './ResultsToggle';

const Results = () => {

    if (false) {
        return (
            <div className="Results">
                <ResultsToggle />
                <ListContainer>
                    <ListElement />
                </ListContainer>
            </div>
        )
    } else {
        return (
            <div className="Results">
                <ResultsToggle />
                <CardElement />
            </div>
        )
    }
}

export default Results;